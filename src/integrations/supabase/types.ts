export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      Alert: {
        Row: {
          createdAt: string
          data: string | null
          id: string
          isDismissed: boolean
          isRead: boolean
          message: string
          readAt: string | null
          severity: string
          title: string
          type: string
          userId: string | null
        }
        Insert: {
          createdAt?: string
          data?: string | null
          id?: string
          isDismissed?: boolean
          isRead?: boolean
          message: string
          readAt?: string | null
          severity?: string
          title: string
          type: string
          userId?: string | null
        }
        Update: {
          createdAt?: string
          data?: string | null
          id?: string
          isDismissed?: boolean
          isRead?: boolean
          message?: string
          readAt?: string | null
          severity?: string
          title?: string
          type?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Alert_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Anomaly: {
        Row: {
          assignedTo: string | null
          createdAt: string
          description: string
          details: string | null
          employeeId: string | null
          evidence: string | null
          id: string
          referenceId: string | null
          referenceType: string | null
          resolvedAt: string | null
          riskScore: number
          severity: string
          status: string
          type: string
          updatedAt: string
        }
        Insert: {
          assignedTo?: string | null
          createdAt?: string
          description: string
          details?: string | null
          employeeId?: string | null
          evidence?: string | null
          id?: string
          referenceId?: string | null
          referenceType?: string | null
          resolvedAt?: string | null
          riskScore?: number
          severity?: string
          status?: string
          type: string
          updatedAt?: string
        }
        Update: {
          assignedTo?: string | null
          createdAt?: string
          description?: string
          details?: string | null
          employeeId?: string | null
          evidence?: string | null
          id?: string
          referenceId?: string | null
          referenceType?: string | null
          resolvedAt?: string | null
          riskScore?: number
          severity?: string
          status?: string
          type?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Anomaly_employeeId_fkey"
            columns: ["employeeId"]
            isOneToOne: false
            referencedRelation: "Employee"
            referencedColumns: ["id"]
          },
        ]
      }
      AnomalyReview: {
        Row: {
          action: string
          anomalyId: string
          createdAt: string
          id: string
          notes: string | null
          reviewerId: string
        }
        Insert: {
          action: string
          anomalyId: string
          createdAt?: string
          id?: string
          notes?: string | null
          reviewerId: string
        }
        Update: {
          action?: string
          anomalyId?: string
          createdAt?: string
          id?: string
          notes?: string | null
          reviewerId?: string
        }
        Relationships: [
          {
            foreignKeyName: "AnomalyReview_anomalyId_fkey"
            columns: ["anomalyId"]
            isOneToOne: false
            referencedRelation: "Anomaly"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "AnomalyReview_reviewerId_fkey"
            columns: ["reviewerId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      AuditLog: {
        Row: {
          action: string
          createdAt: string
          entityId: string | null
          entityType: string
          id: string
          ipAddress: string | null
          newValue: string | null
          notes: string | null
          oldValue: string | null
          userAgent: string | null
          userId: string | null
        }
        Insert: {
          action: string
          createdAt?: string
          entityId?: string | null
          entityType: string
          id?: string
          ipAddress?: string | null
          newValue?: string | null
          notes?: string | null
          oldValue?: string | null
          userAgent?: string | null
          userId?: string | null
        }
        Update: {
          action?: string
          createdAt?: string
          entityId?: string | null
          entityType?: string
          id?: string
          ipAddress?: string | null
          newValue?: string | null
          notes?: string | null
          oldValue?: string | null
          userAgent?: string | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "AuditLog_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Complaint: {
        Row: {
          createdAt: string
          description: string
          guestId: string
          id: string
          resolution: string | null
          resolvedAt: string | null
          resolvedBy: string | null
          severity: string
          status: string
          type: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          description: string
          guestId: string
          id?: string
          resolution?: string | null
          resolvedAt?: string | null
          resolvedBy?: string | null
          severity?: string
          status?: string
          type: string
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          description?: string
          guestId?: string
          id?: string
          resolution?: string | null
          resolvedAt?: string | null
          resolvedBy?: string | null
          severity?: string
          status?: string
          type?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Complaint_guestId_fkey"
            columns: ["guestId"]
            isOneToOne: false
            referencedRelation: "Guest"
            referencedColumns: ["id"]
          },
        ]
      }
      Delivery: {
        Row: {
          createdAt: string
          deliveryNumber: string | null
          discrepancies: string | null
          expectedAt: string | null
          id: string
          isLate: boolean
          notes: string | null
          purchaseOrderId: string | null
          qualityNotes: string | null
          receivedAt: string | null
          receivedBy: string | null
          status: string
          supplierId: string
          temperatureCheck: number | null
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deliveryNumber?: string | null
          discrepancies?: string | null
          expectedAt?: string | null
          id?: string
          isLate?: boolean
          notes?: string | null
          purchaseOrderId?: string | null
          qualityNotes?: string | null
          receivedAt?: string | null
          receivedBy?: string | null
          status?: string
          supplierId: string
          temperatureCheck?: number | null
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          deliveryNumber?: string | null
          discrepancies?: string | null
          expectedAt?: string | null
          id?: string
          isLate?: boolean
          notes?: string | null
          purchaseOrderId?: string | null
          qualityNotes?: string | null
          receivedAt?: string | null
          receivedBy?: string | null
          status?: string
          supplierId?: string
          temperatureCheck?: number | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Delivery_purchaseOrderId_fkey"
            columns: ["purchaseOrderId"]
            isOneToOne: false
            referencedRelation: "PurchaseOrder"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Delivery_supplierId_fkey"
            columns: ["supplierId"]
            isOneToOne: false
            referencedRelation: "Supplier"
            referencedColumns: ["id"]
          },
        ]
      }
      Dish: {
        Row: {
          allergens: string | null
          categoryId: string
          compareAtPrice: number | null
          costPrice: number | null
          createdAt: string
          description: string | null
          descriptionFr: string | null
          dietaryTags: string | null
          id: string
          imageUrl: string | null
          ingredients: string | null
          isAvailable: boolean
          isChefSpecial: boolean
          isNew: boolean
          isSeasonal: boolean
          isVipOnly: boolean
          name: string
          nameAr: string | null
          nameFr: string | null
          pairingSuggestion: string | null
          prepTimeMinutes: number | null
          price: number
          rating: number
          slug: string
          sortOrder: number
          spiceLevel: number | null
          totalOrdered: number
          updatedAt: string
          upsellDishIds: string | null
        }
        Insert: {
          allergens?: string | null
          categoryId: string
          compareAtPrice?: number | null
          costPrice?: number | null
          createdAt?: string
          description?: string | null
          descriptionFr?: string | null
          dietaryTags?: string | null
          id?: string
          imageUrl?: string | null
          ingredients?: string | null
          isAvailable?: boolean
          isChefSpecial?: boolean
          isNew?: boolean
          isSeasonal?: boolean
          isVipOnly?: boolean
          name: string
          nameAr?: string | null
          nameFr?: string | null
          pairingSuggestion?: string | null
          prepTimeMinutes?: number | null
          price: number
          rating?: number
          slug: string
          sortOrder?: number
          spiceLevel?: number | null
          totalOrdered?: number
          updatedAt?: string
          upsellDishIds?: string | null
        }
        Update: {
          allergens?: string | null
          categoryId?: string
          compareAtPrice?: number | null
          costPrice?: number | null
          createdAt?: string
          description?: string | null
          descriptionFr?: string | null
          dietaryTags?: string | null
          id?: string
          imageUrl?: string | null
          ingredients?: string | null
          isAvailable?: boolean
          isChefSpecial?: boolean
          isNew?: boolean
          isSeasonal?: boolean
          isVipOnly?: boolean
          name?: string
          nameAr?: string | null
          nameFr?: string | null
          pairingSuggestion?: string | null
          prepTimeMinutes?: number | null
          price?: number
          rating?: number
          slug?: string
          sortOrder?: number
          spiceLevel?: number | null
          totalOrdered?: number
          updatedAt?: string
          upsellDishIds?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Dish_categoryId_fkey"
            columns: ["categoryId"]
            isOneToOne: false
            referencedRelation: "MenuCategory"
            referencedColumns: ["id"]
          },
        ]
      }
      Employee: {
        Row: {
          createdAt: string
          department: string
          emergencyContact: string | null
          firstName: string
          hireDate: string
          hourlyRate: number | null
          id: string
          isActive: boolean
          lastName: string
          notes: string | null
          phone: string | null
          position: string
          updatedAt: string
          userId: string
        }
        Insert: {
          createdAt?: string
          department: string
          emergencyContact?: string | null
          firstName: string
          hireDate: string
          hourlyRate?: number | null
          id?: string
          isActive?: boolean
          lastName: string
          notes?: string | null
          phone?: string | null
          position: string
          updatedAt?: string
          userId: string
        }
        Update: {
          createdAt?: string
          department?: string
          emergencyContact?: string | null
          firstName?: string
          hireDate?: string
          hourlyRate?: number | null
          id?: string
          isActive?: boolean
          lastName?: string
          notes?: string | null
          phone?: string | null
          position?: string
          updatedAt?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Employee_userId_fkey"
            columns: ["userId"]
            isOneToOne: true
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Forecast: {
        Row: {
          approvedAt: string | null
          approvedBy: string | null
          confidence: number
          createdAt: string
          data: string
          id: string
          methodology: string | null
          period: string
          status: string
          targetDate: string
          type: string
        }
        Insert: {
          approvedAt?: string | null
          approvedBy?: string | null
          confidence?: number
          createdAt?: string
          data: string
          id?: string
          methodology?: string | null
          period: string
          status?: string
          targetDate: string
          type: string
        }
        Update: {
          approvedAt?: string | null
          approvedBy?: string | null
          confidence?: number
          createdAt?: string
          data?: string
          id?: string
          methodology?: string | null
          period?: string
          status?: string
          targetDate?: string
          type?: string
        }
        Relationships: []
      }
      Guest: {
        Row: {
          anniversary: string | null
          averageSpend: number
          company: string | null
          createdAt: string
          dateOfBirth: string | null
          email: string | null
          firstName: string
          id: string
          isActive: boolean
          lastName: string
          lastVisitAt: string | null
          loyaltyPoints: number
          notes: string | null
          phone: string | null
          preferences: string | null
          riskScore: number
          source: string | null
          tier: string
          totalSpent: number
          totalVisits: number
          updatedAt: string
        }
        Insert: {
          anniversary?: string | null
          averageSpend?: number
          company?: string | null
          createdAt?: string
          dateOfBirth?: string | null
          email?: string | null
          firstName: string
          id?: string
          isActive?: boolean
          lastName: string
          lastVisitAt?: string | null
          loyaltyPoints?: number
          notes?: string | null
          phone?: string | null
          preferences?: string | null
          riskScore?: number
          source?: string | null
          tier?: string
          totalSpent?: number
          totalVisits?: number
          updatedAt?: string
        }
        Update: {
          anniversary?: string | null
          averageSpend?: number
          company?: string | null
          createdAt?: string
          dateOfBirth?: string | null
          email?: string | null
          firstName?: string
          id?: string
          isActive?: boolean
          lastName?: string
          lastVisitAt?: string | null
          loyaltyPoints?: number
          notes?: string | null
          phone?: string | null
          preferences?: string | null
          riskScore?: number
          source?: string | null
          tier?: string
          totalSpent?: number
          totalVisits?: number
          updatedAt?: string
        }
        Relationships: []
      }
      GuestTag: {
        Row: {
          guestId: string
          id: string
          tag: string
        }
        Insert: {
          guestId: string
          id?: string
          tag: string
        }
        Update: {
          guestId?: string
          id?: string
          tag?: string
        }
        Relationships: [
          {
            foreignKeyName: "GuestTag_guestId_fkey"
            columns: ["guestId"]
            isOneToOne: false
            referencedRelation: "Guest"
            referencedColumns: ["id"]
          },
        ]
      }
      InventoryItem: {
        Row: {
          barcode: string | null
          category: string
          costPerUnit: number
          createdAt: string
          currentStock: number
          id: string
          isActive: boolean
          isPerishable: boolean
          lastCountedAt: string | null
          maxStock: number | null
          minStock: number
          name: string
          parLevel: number | null
          shelfLifeDays: number | null
          sku: string | null
          storageLocation: string | null
          unit: string
          updatedAt: string
        }
        Insert: {
          barcode?: string | null
          category: string
          costPerUnit?: number
          createdAt?: string
          currentStock?: number
          id?: string
          isActive?: boolean
          isPerishable?: boolean
          lastCountedAt?: string | null
          maxStock?: number | null
          minStock?: number
          name: string
          parLevel?: number | null
          shelfLifeDays?: number | null
          sku?: string | null
          storageLocation?: string | null
          unit: string
          updatedAt?: string
        }
        Update: {
          barcode?: string | null
          category?: string
          costPerUnit?: number
          createdAt?: string
          currentStock?: number
          id?: string
          isActive?: boolean
          isPerishable?: boolean
          lastCountedAt?: string | null
          maxStock?: number | null
          minStock?: number
          name?: string
          parLevel?: number | null
          shelfLifeDays?: number | null
          sku?: string | null
          storageLocation?: string | null
          unit?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Invoice: {
        Row: {
          approvedAt: string | null
          approvedBy: string | null
          attachmentUrl: string | null
          createdAt: string
          currency: string
          dueDate: string | null
          id: string
          invoiceNumber: string
          notes: string | null
          paidAmount: number
          paidAt: string | null
          purchaseOrderId: string | null
          status: string
          subtotal: number
          supplierId: string | null
          taxAmount: number
          totalAmount: number
          type: string
          updatedAt: string
        }
        Insert: {
          approvedAt?: string | null
          approvedBy?: string | null
          attachmentUrl?: string | null
          createdAt?: string
          currency?: string
          dueDate?: string | null
          id?: string
          invoiceNumber: string
          notes?: string | null
          paidAmount?: number
          paidAt?: string | null
          purchaseOrderId?: string | null
          status?: string
          subtotal: number
          supplierId?: string | null
          taxAmount?: number
          totalAmount: number
          type?: string
          updatedAt?: string
        }
        Update: {
          approvedAt?: string | null
          approvedBy?: string | null
          attachmentUrl?: string | null
          createdAt?: string
          currency?: string
          dueDate?: string | null
          id?: string
          invoiceNumber?: string
          notes?: string | null
          paidAmount?: number
          paidAt?: string | null
          purchaseOrderId?: string | null
          status?: string
          subtotal?: number
          supplierId?: string | null
          taxAmount?: number
          totalAmount?: number
          type?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Invoice_purchaseOrderId_fkey"
            columns: ["purchaseOrderId"]
            isOneToOne: false
            referencedRelation: "PurchaseOrder"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Invoice_supplierId_fkey"
            columns: ["supplierId"]
            isOneToOne: false
            referencedRelation: "Supplier"
            referencedColumns: ["id"]
          },
        ]
      }
      Menu: {
        Row: {
          availableFrom: string | null
          availableTo: string | null
          createdAt: string
          description: string | null
          id: string
          isActive: boolean
          isVipOnly: boolean
          name: string
          slug: string
          sortOrder: number
          type: string
          updatedAt: string
          venueId: string
        }
        Insert: {
          availableFrom?: string | null
          availableTo?: string | null
          createdAt?: string
          description?: string | null
          id?: string
          isActive?: boolean
          isVipOnly?: boolean
          name: string
          slug: string
          sortOrder?: number
          type?: string
          updatedAt?: string
          venueId: string
        }
        Update: {
          availableFrom?: string | null
          availableTo?: string | null
          createdAt?: string
          description?: string | null
          id?: string
          isActive?: boolean
          isVipOnly?: boolean
          name?: string
          slug?: string
          sortOrder?: number
          type?: string
          updatedAt?: string
          venueId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Menu_venueId_fkey"
            columns: ["venueId"]
            isOneToOne: false
            referencedRelation: "Venue"
            referencedColumns: ["id"]
          },
        ]
      }
      MenuCategory: {
        Row: {
          createdAt: string
          description: string | null
          descriptionFr: string | null
          id: string
          imageUrl: string | null
          isActive: boolean
          menuId: string
          name: string
          nameAr: string | null
          nameFr: string | null
          slug: string
          sortOrder: number
        }
        Insert: {
          createdAt?: string
          description?: string | null
          descriptionFr?: string | null
          id?: string
          imageUrl?: string | null
          isActive?: boolean
          menuId: string
          name: string
          nameAr?: string | null
          nameFr?: string | null
          slug: string
          sortOrder?: number
        }
        Update: {
          createdAt?: string
          description?: string | null
          descriptionFr?: string | null
          id?: string
          imageUrl?: string | null
          isActive?: boolean
          menuId?: string
          name?: string
          nameAr?: string | null
          nameFr?: string | null
          slug?: string
          sortOrder?: number
        }
        Relationships: [
          {
            foreignKeyName: "MenuCategory_menuId_fkey"
            columns: ["menuId"]
            isOneToOne: false
            referencedRelation: "Menu"
            referencedColumns: ["id"]
          },
        ]
      }
      OrderItem: {
        Row: {
          complimentaryReason: string | null
          createdAt: string
          dishId: string
          firedAt: string | null
          id: string
          isComplimentary: boolean
          isVoid: boolean
          modifiers: string | null
          notes: string | null
          orderId: string
          quantity: number
          readyAt: string | null
          servedAt: string | null
          status: string
          totalPrice: number
          unitPrice: number
          voidedBy: string | null
          voidReason: string | null
        }
        Insert: {
          complimentaryReason?: string | null
          createdAt?: string
          dishId: string
          firedAt?: string | null
          id?: string
          isComplimentary?: boolean
          isVoid?: boolean
          modifiers?: string | null
          notes?: string | null
          orderId: string
          quantity: number
          readyAt?: string | null
          servedAt?: string | null
          status?: string
          totalPrice: number
          unitPrice: number
          voidedBy?: string | null
          voidReason?: string | null
        }
        Update: {
          complimentaryReason?: string | null
          createdAt?: string
          dishId?: string
          firedAt?: string | null
          id?: string
          isComplimentary?: boolean
          isVoid?: boolean
          modifiers?: string | null
          notes?: string | null
          orderId?: string
          quantity?: number
          readyAt?: string | null
          servedAt?: string | null
          status?: string
          totalPrice?: number
          unitPrice?: number
          voidedBy?: string | null
          voidReason?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "OrderItem_dishId_fkey"
            columns: ["dishId"]
            isOneToOne: false
            referencedRelation: "Dish"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "OrderItem_orderId_fkey"
            columns: ["orderId"]
            isOneToOne: false
            referencedRelation: "OrderTicket"
            referencedColumns: ["id"]
          },
        ]
      }
      OrderTicket: {
        Row: {
          closedAt: string | null
          complimentaryReason: string | null
          createdAt: string
          discountAmount: number
          discountReason: string | null
          employeeId: string | null
          guestCount: number
          guestId: string | null
          id: string
          isComplimentary: boolean
          isVoid: boolean
          kitchenNotes: string | null
          notes: string | null
          openedAt: string
          paymentMethod: string | null
          paymentStatus: string
          status: string
          subtotal: number
          tableId: string | null
          taxAmount: number
          ticketNumber: string
          tipAmount: number
          totalAmount: number
          type: string
          updatedAt: string
          voidedAt: string | null
          voidedBy: string | null
          voidReason: string | null
        }
        Insert: {
          closedAt?: string | null
          complimentaryReason?: string | null
          createdAt?: string
          discountAmount?: number
          discountReason?: string | null
          employeeId?: string | null
          guestCount?: number
          guestId?: string | null
          id?: string
          isComplimentary?: boolean
          isVoid?: boolean
          kitchenNotes?: string | null
          notes?: string | null
          openedAt?: string
          paymentMethod?: string | null
          paymentStatus?: string
          status?: string
          subtotal?: number
          tableId?: string | null
          taxAmount?: number
          ticketNumber: string
          tipAmount?: number
          totalAmount?: number
          type?: string
          updatedAt?: string
          voidedAt?: string | null
          voidedBy?: string | null
          voidReason?: string | null
        }
        Update: {
          closedAt?: string | null
          complimentaryReason?: string | null
          createdAt?: string
          discountAmount?: number
          discountReason?: string | null
          employeeId?: string | null
          guestCount?: number
          guestId?: string | null
          id?: string
          isComplimentary?: boolean
          isVoid?: boolean
          kitchenNotes?: string | null
          notes?: string | null
          openedAt?: string
          paymentMethod?: string | null
          paymentStatus?: string
          status?: string
          subtotal?: number
          tableId?: string | null
          taxAmount?: number
          ticketNumber?: string
          tipAmount?: number
          totalAmount?: number
          type?: string
          updatedAt?: string
          voidedAt?: string | null
          voidedBy?: string | null
          voidReason?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "OrderTicket_employeeId_fkey"
            columns: ["employeeId"]
            isOneToOne: false
            referencedRelation: "Employee"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "OrderTicket_guestId_fkey"
            columns: ["guestId"]
            isOneToOne: false
            referencedRelation: "Guest"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "OrderTicket_tableId_fkey"
            columns: ["tableId"]
            isOneToOne: false
            referencedRelation: "Table"
            referencedColumns: ["id"]
          },
        ]
      }
      Payment: {
        Row: {
          amount: number
          createdAt: string
          id: string
          invoiceId: string
          method: string
          notes: string | null
          paidAt: string
          recordedBy: string | null
          reference: string | null
        }
        Insert: {
          amount: number
          createdAt?: string
          id?: string
          invoiceId: string
          method: string
          notes?: string | null
          paidAt?: string
          recordedBy?: string | null
          reference?: string | null
        }
        Update: {
          amount?: number
          createdAt?: string
          id?: string
          invoiceId?: string
          method?: string
          notes?: string | null
          paidAt?: string
          recordedBy?: string | null
          reference?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Payment_invoiceId_fkey"
            columns: ["invoiceId"]
            isOneToOne: false
            referencedRelation: "Invoice"
            referencedColumns: ["id"]
          },
        ]
      }
      PerformanceNote: {
        Row: {
          authorId: string
          createdAt: string
          employeeId: string
          id: string
          note: string
          type: string
        }
        Insert: {
          authorId: string
          createdAt?: string
          employeeId: string
          id?: string
          note: string
          type?: string
        }
        Update: {
          authorId?: string
          createdAt?: string
          employeeId?: string
          id?: string
          note?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "PerformanceNote_employeeId_fkey"
            columns: ["employeeId"]
            isOneToOne: false
            referencedRelation: "Employee"
            referencedColumns: ["id"]
          },
        ]
      }
      PrivateRoom: {
        Row: {
          amenities: string | null
          capacity: number
          createdAt: string
          description: string | null
          id: string
          isActive: boolean
          minSpend: number | null
          name: string
          venueId: string
        }
        Insert: {
          amenities?: string | null
          capacity: number
          createdAt?: string
          description?: string | null
          id?: string
          isActive?: boolean
          minSpend?: number | null
          name: string
          venueId: string
        }
        Update: {
          amenities?: string | null
          capacity?: number
          createdAt?: string
          description?: string | null
          id?: string
          isActive?: boolean
          minSpend?: number | null
          name?: string
          venueId?: string
        }
        Relationships: [
          {
            foreignKeyName: "PrivateRoom_venueId_fkey"
            columns: ["venueId"]
            isOneToOne: false
            referencedRelation: "Venue"
            referencedColumns: ["id"]
          },
        ]
      }
      PurchaseOrder: {
        Row: {
          approvedAt: string | null
          approvedBy: string | null
          createdAt: string
          expectedDate: string | null
          id: string
          isForecastBased: boolean
          notes: string | null
          orderNumber: string
          status: string
          submittedAt: string | null
          supplierId: string
          totalAmount: number
          updatedAt: string
        }
        Insert: {
          approvedAt?: string | null
          approvedBy?: string | null
          createdAt?: string
          expectedDate?: string | null
          id?: string
          isForecastBased?: boolean
          notes?: string | null
          orderNumber: string
          status?: string
          submittedAt?: string | null
          supplierId: string
          totalAmount?: number
          updatedAt?: string
        }
        Update: {
          approvedAt?: string | null
          approvedBy?: string | null
          createdAt?: string
          expectedDate?: string | null
          id?: string
          isForecastBased?: boolean
          notes?: string | null
          orderNumber?: string
          status?: string
          submittedAt?: string | null
          supplierId?: string
          totalAmount?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "PurchaseOrder_supplierId_fkey"
            columns: ["supplierId"]
            isOneToOne: false
            referencedRelation: "Supplier"
            referencedColumns: ["id"]
          },
        ]
      }
      PurchaseOrderItem: {
        Row: {
          id: string
          inventoryItemId: string
          notes: string | null
          purchaseOrderId: string
          quantity: number
          receivedQty: number
          unitPrice: number
        }
        Insert: {
          id?: string
          inventoryItemId: string
          notes?: string | null
          purchaseOrderId: string
          quantity: number
          receivedQty?: number
          unitPrice: number
        }
        Update: {
          id?: string
          inventoryItemId?: string
          notes?: string | null
          purchaseOrderId?: string
          quantity?: number
          receivedQty?: number
          unitPrice?: number
        }
        Relationships: [
          {
            foreignKeyName: "PurchaseOrderItem_inventoryItemId_fkey"
            columns: ["inventoryItemId"]
            isOneToOne: false
            referencedRelation: "InventoryItem"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "PurchaseOrderItem_purchaseOrderId_fkey"
            columns: ["purchaseOrderId"]
            isOneToOne: false
            referencedRelation: "PurchaseOrder"
            referencedColumns: ["id"]
          },
        ]
      }
      Recipe: {
        Row: {
          cookTimeMinutes: number | null
          createdAt: string
          difficulty: string
          dishId: string
          id: string
          instructions: string | null
          notes: string | null
          prepTimeMinutes: number | null
          servings: number
          updatedAt: string
        }
        Insert: {
          cookTimeMinutes?: number | null
          createdAt?: string
          difficulty?: string
          dishId: string
          id?: string
          instructions?: string | null
          notes?: string | null
          prepTimeMinutes?: number | null
          servings?: number
          updatedAt?: string
        }
        Update: {
          cookTimeMinutes?: number | null
          createdAt?: string
          difficulty?: string
          dishId?: string
          id?: string
          instructions?: string | null
          notes?: string | null
          prepTimeMinutes?: number | null
          servings?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Recipe_dishId_fkey"
            columns: ["dishId"]
            isOneToOne: true
            referencedRelation: "Dish"
            referencedColumns: ["id"]
          },
        ]
      }
      RecipeIngredient: {
        Row: {
          costPerUnit: number | null
          id: string
          inventoryItemId: string | null
          isOptional: boolean
          name: string
          notes: string | null
          quantity: number
          recipeId: string
          unit: string
        }
        Insert: {
          costPerUnit?: number | null
          id?: string
          inventoryItemId?: string | null
          isOptional?: boolean
          name: string
          notes?: string | null
          quantity: number
          recipeId: string
          unit: string
        }
        Update: {
          costPerUnit?: number | null
          id?: string
          inventoryItemId?: string | null
          isOptional?: boolean
          name?: string
          notes?: string | null
          quantity?: number
          recipeId?: string
          unit?: string
        }
        Relationships: [
          {
            foreignKeyName: "RecipeIngredient_inventoryItemId_fkey"
            columns: ["inventoryItemId"]
            isOneToOne: false
            referencedRelation: "InventoryItem"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "RecipeIngredient_recipeId_fkey"
            columns: ["recipeId"]
            isOneToOne: false
            referencedRelation: "Recipe"
            referencedColumns: ["id"]
          },
        ]
      }
      Recommendation: {
        Row: {
          actionRequired: string | null
          createdAt: string
          data: string | null
          decidedAt: string | null
          decidedBy: string | null
          description: string
          forecastId: string | null
          id: string
          priority: string
          rationale: string | null
          status: string
          title: string
          type: string
        }
        Insert: {
          actionRequired?: string | null
          createdAt?: string
          data?: string | null
          decidedAt?: string | null
          decidedBy?: string | null
          description: string
          forecastId?: string | null
          id?: string
          priority?: string
          rationale?: string | null
          status?: string
          title: string
          type: string
        }
        Update: {
          actionRequired?: string | null
          createdAt?: string
          data?: string | null
          decidedAt?: string | null
          decidedBy?: string | null
          description?: string
          forecastId?: string | null
          id?: string
          priority?: string
          rationale?: string | null
          status?: string
          title?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "Recommendation_forecastId_fkey"
            columns: ["forecastId"]
            isOneToOne: false
            referencedRelation: "Forecast"
            referencedColumns: ["id"]
          },
        ]
      }
      Reservation: {
        Row: {
          confirmationCode: string | null
          createdAt: string
          date: string
          endTime: string | null
          guestEmail: string | null
          guestId: string | null
          guestName: string
          guestPhone: string | null
          id: string
          isPrivateRoom: boolean
          isVip: boolean
          noShowCount: number
          notes: string | null
          occasion: string | null
          partySize: number
          privateRoomId: string | null
          source: string
          specialRequests: string | null
          status: string
          tableId: string | null
          timeSlot: string
          updatedAt: string
          venueId: string | null
        }
        Insert: {
          confirmationCode?: string | null
          createdAt?: string
          date: string
          endTime?: string | null
          guestEmail?: string | null
          guestId?: string | null
          guestName: string
          guestPhone?: string | null
          id?: string
          isPrivateRoom?: boolean
          isVip?: boolean
          noShowCount?: number
          notes?: string | null
          occasion?: string | null
          partySize: number
          privateRoomId?: string | null
          source?: string
          specialRequests?: string | null
          status?: string
          tableId?: string | null
          timeSlot: string
          updatedAt?: string
          venueId?: string | null
        }
        Update: {
          confirmationCode?: string | null
          createdAt?: string
          date?: string
          endTime?: string | null
          guestEmail?: string | null
          guestId?: string | null
          guestName?: string
          guestPhone?: string | null
          id?: string
          isPrivateRoom?: boolean
          isVip?: boolean
          noShowCount?: number
          notes?: string | null
          occasion?: string | null
          partySize?: number
          privateRoomId?: string | null
          source?: string
          specialRequests?: string | null
          status?: string
          tableId?: string | null
          timeSlot?: string
          updatedAt?: string
          venueId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Reservation_guestId_fkey"
            columns: ["guestId"]
            isOneToOne: false
            referencedRelation: "Guest"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Reservation_privateRoomId_fkey"
            columns: ["privateRoomId"]
            isOneToOne: false
            referencedRelation: "PrivateRoom"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Reservation_tableId_fkey"
            columns: ["tableId"]
            isOneToOne: false
            referencedRelation: "Table"
            referencedColumns: ["id"]
          },
        ]
      }
      Session: {
        Row: {
          createdAt: string
          expiresAt: string
          id: string
          token: string
          userId: string
        }
        Insert: {
          createdAt?: string
          expiresAt: string
          id?: string
          token: string
          userId: string
        }
        Update: {
          createdAt?: string
          expiresAt?: string
          id?: string
          token?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Session_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Setting: {
        Row: {
          category: string
          createdAt: string
          id: string
          key: string
          label: string | null
          type: string
          updatedAt: string
          value: string
        }
        Insert: {
          category?: string
          createdAt?: string
          id?: string
          key: string
          label?: string | null
          type?: string
          updatedAt?: string
          value: string
        }
        Update: {
          category?: string
          createdAt?: string
          id?: string
          key?: string
          label?: string | null
          type?: string
          updatedAt?: string
          value?: string
        }
        Relationships: []
      }
      Shift: {
        Row: {
          createdAt: string
          employeeId: string
          endTime: string | null
          id: string
          notes: string | null
          startTime: string
          status: string
        }
        Insert: {
          createdAt?: string
          employeeId: string
          endTime?: string | null
          id?: string
          notes?: string | null
          startTime: string
          status?: string
        }
        Update: {
          createdAt?: string
          employeeId?: string
          endTime?: string | null
          id?: string
          notes?: string | null
          startTime?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "Shift_employeeId_fkey"
            columns: ["employeeId"]
            isOneToOne: false
            referencedRelation: "Employee"
            referencedColumns: ["id"]
          },
        ]
      }
      SpoilageEvent: {
        Row: {
          actionTaken: string | null
          createdAt: string
          discoveredBy: string | null
          estimatedValue: number
          id: string
          inventoryItemId: string
          notes: string | null
          quantity: number
          reason: string
          shiftId: string | null
          suggestedDishes: string | null
          unit: string
        }
        Insert: {
          actionTaken?: string | null
          createdAt?: string
          discoveredBy?: string | null
          estimatedValue: number
          id?: string
          inventoryItemId: string
          notes?: string | null
          quantity: number
          reason: string
          shiftId?: string | null
          suggestedDishes?: string | null
          unit: string
        }
        Update: {
          actionTaken?: string | null
          createdAt?: string
          discoveredBy?: string | null
          estimatedValue?: number
          id?: string
          inventoryItemId?: string
          notes?: string | null
          quantity?: number
          reason?: string
          shiftId?: string | null
          suggestedDishes?: string | null
          unit?: string
        }
        Relationships: [
          {
            foreignKeyName: "SpoilageEvent_inventoryItemId_fkey"
            columns: ["inventoryItemId"]
            isOneToOne: false
            referencedRelation: "InventoryItem"
            referencedColumns: ["id"]
          },
        ]
      }
      StockBatch: {
        Row: {
          batchNumber: string | null
          bestBeforeAt: string | null
          costPerUnit: number
          createdAt: string
          deliveryId: string | null
          expiresAt: string | null
          id: string
          inventoryItemId: string
          notes: string | null
          quantity: number
          receivedAt: string
          remainingQty: number
          status: string
          supplierId: string | null
        }
        Insert: {
          batchNumber?: string | null
          bestBeforeAt?: string | null
          costPerUnit: number
          createdAt?: string
          deliveryId?: string | null
          expiresAt?: string | null
          id?: string
          inventoryItemId: string
          notes?: string | null
          quantity: number
          receivedAt?: string
          remainingQty: number
          status?: string
          supplierId?: string | null
        }
        Update: {
          batchNumber?: string | null
          bestBeforeAt?: string | null
          costPerUnit?: number
          createdAt?: string
          deliveryId?: string | null
          expiresAt?: string | null
          id?: string
          inventoryItemId?: string
          notes?: string | null
          quantity?: number
          receivedAt?: string
          remainingQty?: number
          status?: string
          supplierId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "StockBatch_inventoryItemId_fkey"
            columns: ["inventoryItemId"]
            isOneToOne: false
            referencedRelation: "InventoryItem"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "StockBatch_supplierId_fkey"
            columns: ["supplierId"]
            isOneToOne: false
            referencedRelation: "Supplier"
            referencedColumns: ["id"]
          },
        ]
      }
      StockMovement: {
        Row: {
          createdAt: string
          id: string
          inventoryItemId: string
          newStock: number
          notes: string | null
          performedBy: string | null
          previousStock: number
          quantity: number
          reason: string | null
          referenceId: string | null
          referenceType: string | null
          shiftId: string | null
          type: string
        }
        Insert: {
          createdAt?: string
          id?: string
          inventoryItemId: string
          newStock: number
          notes?: string | null
          performedBy?: string | null
          previousStock: number
          quantity: number
          reason?: string | null
          referenceId?: string | null
          referenceType?: string | null
          shiftId?: string | null
          type: string
        }
        Update: {
          createdAt?: string
          id?: string
          inventoryItemId?: string
          newStock?: number
          notes?: string | null
          performedBy?: string | null
          previousStock?: number
          quantity?: number
          reason?: string | null
          referenceId?: string | null
          referenceType?: string | null
          shiftId?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "StockMovement_inventoryItemId_fkey"
            columns: ["inventoryItemId"]
            isOneToOne: false
            referencedRelation: "InventoryItem"
            referencedColumns: ["id"]
          },
        ]
      }
      Supplier: {
        Row: {
          address: string | null
          city: string | null
          contactName: string | null
          createdAt: string
          deliveryDays: string | null
          email: string | null
          id: string
          isActive: boolean
          isPreferred: boolean
          leadTimeDays: number
          name: string
          notes: string | null
          paymentTerms: string | null
          phone: string | null
          rating: number
          reliabilityScore: number
          taxId: string | null
          updatedAt: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          contactName?: string | null
          createdAt?: string
          deliveryDays?: string | null
          email?: string | null
          id?: string
          isActive?: boolean
          isPreferred?: boolean
          leadTimeDays?: number
          name: string
          notes?: string | null
          paymentTerms?: string | null
          phone?: string | null
          rating?: number
          reliabilityScore?: number
          taxId?: string | null
          updatedAt?: string
        }
        Update: {
          address?: string | null
          city?: string | null
          contactName?: string | null
          createdAt?: string
          deliveryDays?: string | null
          email?: string | null
          id?: string
          isActive?: boolean
          isPreferred?: boolean
          leadTimeDays?: number
          name?: string
          notes?: string | null
          paymentTerms?: string | null
          phone?: string | null
          rating?: number
          reliabilityScore?: number
          taxId?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      SupplierProduct: {
        Row: {
          createdAt: string
          id: string
          inventoryItemId: string
          isPreferred: boolean
          lastOrderedAt: string | null
          leadTimeDays: number | null
          minOrderQty: number | null
          notes: string | null
          priceHistory: string | null
          supplierId: string
          supplierSku: string | null
          unitPrice: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: string
          inventoryItemId: string
          isPreferred?: boolean
          lastOrderedAt?: string | null
          leadTimeDays?: number | null
          minOrderQty?: number | null
          notes?: string | null
          priceHistory?: string | null
          supplierId: string
          supplierSku?: string | null
          unitPrice: number
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          id?: string
          inventoryItemId?: string
          isPreferred?: boolean
          lastOrderedAt?: string | null
          leadTimeDays?: number | null
          minOrderQty?: number | null
          notes?: string | null
          priceHistory?: string | null
          supplierId?: string
          supplierSku?: string | null
          unitPrice?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "SupplierProduct_inventoryItemId_fkey"
            columns: ["inventoryItemId"]
            isOneToOne: false
            referencedRelation: "InventoryItem"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "SupplierProduct_supplierId_fkey"
            columns: ["supplierId"]
            isOneToOne: false
            referencedRelation: "Supplier"
            referencedColumns: ["id"]
          },
        ]
      }
      Table: {
        Row: {
          capacity: number
          createdAt: string
          id: string
          isActive: boolean
          number: number
          posX: number | null
          posY: number | null
          qrCode: string | null
          status: string
          venueId: string
          zone: string
        }
        Insert: {
          capacity: number
          createdAt?: string
          id?: string
          isActive?: boolean
          number: number
          posX?: number | null
          posY?: number | null
          qrCode?: string | null
          status?: string
          venueId: string
          zone?: string
        }
        Update: {
          capacity?: number
          createdAt?: string
          id?: string
          isActive?: boolean
          number?: number
          posX?: number | null
          posY?: number | null
          qrCode?: string | null
          status?: string
          venueId?: string
          zone?: string
        }
        Relationships: [
          {
            foreignKeyName: "Table_venueId_fkey"
            columns: ["venueId"]
            isOneToOne: false
            referencedRelation: "Venue"
            referencedColumns: ["id"]
          },
        ]
      }
      User: {
        Row: {
          avatarUrl: string | null
          createdAt: string
          email: string
          id: string
          isActive: boolean
          lastLoginAt: string | null
          name: string | null
          passwordHash: string
          phone: string | null
          role: string
          updatedAt: string
        }
        Insert: {
          avatarUrl?: string | null
          createdAt?: string
          email: string
          id?: string
          isActive?: boolean
          lastLoginAt?: string | null
          name?: string | null
          passwordHash: string
          phone?: string | null
          role?: string
          updatedAt?: string
        }
        Update: {
          avatarUrl?: string | null
          createdAt?: string
          email?: string
          id?: string
          isActive?: boolean
          lastLoginAt?: string | null
          name?: string | null
          passwordHash?: string
          phone?: string | null
          role?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Venue: {
        Row: {
          address: string | null
          city: string | null
          createdAt: string
          currency: string
          description: string | null
          email: string | null
          id: string
          isActive: boolean
          name: string
          phone: string | null
          settings: string | null
          slug: string
          timezone: string
          updatedAt: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          createdAt?: string
          currency?: string
          description?: string | null
          email?: string | null
          id?: string
          isActive?: boolean
          name: string
          phone?: string | null
          settings?: string | null
          slug: string
          timezone?: string
          updatedAt?: string
        }
        Update: {
          address?: string | null
          city?: string | null
          createdAt?: string
          currency?: string
          description?: string | null
          email?: string | null
          id?: string
          isActive?: boolean
          name?: string
          phone?: string | null
          settings?: string | null
          slug?: string
          timezone?: string
          updatedAt?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
