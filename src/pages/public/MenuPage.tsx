import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { AlertCircle, Leaf } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Dish {
  id: string;
  name: string;
  description: string | null;
  price: number;
  isChefSpecial: boolean;
  isNew: boolean;
  allergens: string | null;
  dietaryTags: string | null;
}

interface Category {
  id: string;
  name: string;
  description: string | null;
  dishes: Dish[];
}

export default function MenuPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        // Get active menu
        const { data: menu } = await supabase
          .from("Menu")
          .select("id")
          .eq("isActive", true)
          .limit(1)
          .single();

        if (!menu) {
          setLoading(false);
          return;
        }

        // Get categories
        const { data: cats } = await supabase
          .from("MenuCategory")
          .select("id, name, description")
          .eq("menuId", menu.id)
          .eq("isActive", true)
          .order("sortOrder");

        if (!cats || cats.length === 0) {
          setLoading(false);
          return;
        }

        // Get dishes for all categories
        const { data: dishes } = await supabase
          .from("Dish")
          .select("id, name, description, price, isChefSpecial, isNew, allergens, dietaryTags, categoryId")
          .eq("isAvailable", true)
          .order("sortOrder");

        const categoriesWithDishes: Category[] = cats.map((cat) => ({
          ...cat,
          dishes: (dishes || []).filter((d: any) => d.categoryId === cat.id),
        }));

        setCategories(categoriesWithDishes);
        setActiveCategory(cats[0].id);
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gold-500/20 border-t-gold-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-stone-400">Loading menu...</p>
        </div>
      </div>
    );
  }

  const activeCat = categories.find((c) => c.id === activeCategory);

  return (
    <>
      <section className="section-spacing border-b border-stone-800 bg-gradient-to-b from-stone-900 to-stone-950">
        <div className="container-premium text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading font-bold">Our Menu</h1>
          <div className="h-1 w-16 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto" />
        </div>
      </section>

      <section className="section-spacing border-b border-stone-800">
        <div className="container-premium space-y-12">
          {categories.length > 0 && (
            <>
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gold-500 text-black"
                        : "bg-stone-900 border border-stone-800 text-gold-400 hover:border-gold-500/50"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {activeCat && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-heading font-bold text-center text-gold-400">{activeCat.name}</h2>
                  {activeCat.description && (
                    <p className="text-center text-stone-300 max-w-2xl mx-auto">{activeCat.description}</p>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    {activeCat.dishes.map((dish) => (
                      <Card key={dish.id} className="bg-stone-900 border-stone-800 hover:border-gold-500/50 transition-all duration-300 p-6 space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-heading font-semibold text-gold-400">{dish.name}</h3>
                            {dish.description && <p className="text-stone-400 text-sm mt-1">{dish.description}</p>}
                          </div>
                          <p className="text-gold-500 font-semibold whitespace-nowrap">{dish.price} MAD</p>
                        </div>
                        <div className="flex flex-wrap gap-3 pt-2">
                          {dish.isChefSpecial && (
                            <span className="px-3 py-1 bg-gold-500/20 border border-gold-500/50 rounded text-gold-400 text-xs font-semibold">Chef's Special</span>
                          )}
                          {dish.isNew && (
                            <span className="px-3 py-1 bg-bronze-500/20 border border-bronze-500/50 rounded text-bronze-400 text-xs font-semibold">New</span>
                          )}
                        </div>
                        {(dish.allergens || dish.dietaryTags) && (
                          <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-800">
                            {dish.allergens && (
                              <div className="flex items-center gap-1 text-orange-400 text-xs">
                                <AlertCircle size={14} />
                                <span>{dish.allergens}</span>
                              </div>
                            )}
                            {dish.dietaryTags && (
                              <div className="flex items-center gap-1 text-green-400 text-xs">
                                <Leaf size={14} />
                                <span>{dish.dietaryTags}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {categories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-stone-400 text-lg">Menu coming soon...</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
