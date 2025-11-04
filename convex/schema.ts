import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    slug: v.string(),
    category: v.string(),
    new: v.boolean(),
    price: v.number(),
    description: v.string(),
    features: v.string(),
    image: v.string(),
    categoryImage: v.string(),
    gallery: v.object({
      first: v.string(),
      second: v.string(),
      third: v.string(),
    }),
    includes: v.array(
      v.object({
        quantity: v.number(),
        item: v.string(),
      })
    ),
    others: v.optional(
      v.array(
        v.object({
          slug: v.string(),
          name: v.string(),
          image: v.string(),
        })
      )
    ),
  }).index("by_slug", ["slug"]).index("by_category", ["category"]),

  cart: defineTable({
    userId: v.string(),
    productId: v.id("products"),
    quantity: v.number(),
  }).index("by_user", ["userId"]).index("by_user_product", ["userId", "productId"]),

  orders: defineTable({
    userId: v.string(),
    items: v.array(
      v.object({
        productId: v.id("products"),
        productName: v.string(),
        quantity: v.number(),
        price: v.number(),
      })
    ),
    total: v.number(),
    shippingAddress: v.object({
      name: v.string(),
      email: v.string(),
      address: v.string(),
      zipCode: v.string(),
      city: v.string(),
      country: v.string(),
      phone: v.string(),
    }),
    paymentMethod: v.string(),
    status: v.string(),
    createdAt: v.number(),
  }).index("by_user", ["userId"]),
});
