"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { OrderConfirmationModal } from "@/components/OrderConfirmationModal";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setIsProcessing(true);

    try {
      const newOrderNumber = `#${Date.now().toString().slice(-6)}`;
      
      await fetch("/api/send-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          orderNumber: newOrderNumber,
          items: items.map((item) => ({
            productName: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
          total: grandTotal,
        }),
      });

      setOrderNumber(newOrderNumber);
      setShowConfirmation(true);
      clearCart();
    } catch (error) {
      console.error("Order submission failed:", error);
      alert("Failed to process order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Header />

      <div className="bg-light-grey min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="text-gray-600 hover:text-peach mb-8 inline-block">
            Go Back
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-lg p-8">
              <h1 className="text-3xl font-bold uppercase mb-8">Checkout</h1>

              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h2 className="text-peach uppercase text-sm font-bold tracking-wider mb-4">
                    Billing Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-peach focus:outline-none"
                        placeholder="Alexei Ward"
                        value={formData.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-peach focus:outline-none"
                        placeholder="alexei@mail.com"
                        value={formData.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-peach focus:outline-none"
                        placeholder="+1 202-555-0136"
                        value={formData.phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-peach uppercase text-sm font-bold tracking-wider mb-4">
                    Shipping Info
                  </h2>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">Address</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-peach focus:outline-none"
                        placeholder="1137 Williams Avenue"
                        value={formData.address}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold mb-2">ZIP Code</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-peach focus:outline-none"
                          placeholder="10001"
                          value={formData.zipCode}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFormData({ ...formData, zipCode: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">City</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-peach focus:outline-none"
                          placeholder="New York"
                          value={formData.city}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-2">Country</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-peach focus:outline-none"
                          placeholder="United States"
                          value={formData.country}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFormData({ ...formData, country: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-peach uppercase text-sm font-bold tracking-wider mb-4">
                    Payment Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">Payment Method</label>
                      <div className="space-y-3">
                        <label className="flex items-center px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:border-peach">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="e-money"
                            checked={formData.paymentMethod === "e-money"}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                              setFormData({
                                ...formData,
                                paymentMethod: e.target.value,
                              })
                            }
                            className="mr-4"
                          />
                          <span className="font-bold">e-Money</span>
                        </label>
                        <label className="flex items-center px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:border-peach">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cash"
                            checked={formData.paymentMethod === "cash"}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                              setFormData({
                                ...formData,
                                paymentMethod: e.target.value,
                              })
                            }
                            className="mr-4"
                          />
                          <span className="font-bold">Cash on Delivery</span>
                        </label>
                      </div>
                    </div>

                    {formData.paymentMethod === "e-money" && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-bold mb-2">
                            e-Money Number
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-peach focus:outline-none"
                            placeholder="238521993"
                            value={formData.eMoneyNumber}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                              setFormData({
                                ...formData,
                                eMoneyNumber: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-2">
                            e-Money PIN
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-peach focus:outline-none"
                            placeholder="6891"
                            value={formData.eMoneyPin}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                              setFormData({
                                ...formData,
                                eMoneyPin: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-white rounded-lg p-8 h-fit">
              <h2 className="text-xl font-bold uppercase mb-8">Summary</h2>
              
              <div className="space-y-6 mb-8">
                {items.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="relative w-16 h-16 bg-light-grey rounded flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          $ {item.price.toLocaleString()}
                        </p>
                      </div>
                      <span className="text-gray-500 font-bold">x{item.quantity}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase">Total</span>
                  <span className="font-bold">$ {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase">Shipping</span>
                  <span className="font-bold">$ {shipping}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 uppercase">VAT (Included)</span>
                  <span className="font-bold">$ {vat.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-4">
                  <span className="text-gray-500 uppercase">Grand Total</span>
                  <span className="font-bold text-peach text-lg">
                    $ {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <Button 
                className="w-full" 
                onClick={handleSubmit}
                disabled={items.length === 0 || isProcessing}
              >
                {isProcessing ? "Processing..." : "Continue & Pay"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      <OrderConfirmationModal
        isOpen={showConfirmation}
        orderNumber={orderNumber}
        items={items.map((item) => ({
          productName: item.name,
          quantity: item.quantity,
          price: item.price,
          image: item.image,
        }))}
        total={grandTotal}
      />
    </>
  );
}
