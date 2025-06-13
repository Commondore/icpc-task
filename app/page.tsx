import React from "react";
import { Coffee, Clock, Gift, Star, ArrowRight, Menu, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Header */}
      <header className="relative z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Coffee className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                BrewPass
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                Cafés
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                How it Works
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                Support
              </a>
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Download App
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-stone-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
                Now available in 50+ cities
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Your coffee,{" "}
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  delivered
                </span>{" "}
                in minutes
              </h1>

              <p className="text-xl text-slate-600 mb-8 max-w-xl lg:max-w-none">
                Skip the lines, earn rewards, and enjoy perfectly crafted coffee from your favorite
                local cafés. The future of coffee ordering is here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-white/80 backdrop-blur text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg border border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Content - Phone Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Floating elements */}
                <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 animate-bounce [animation-delay:0s]"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-60 animate-bounce [animation-delay:1s]"></div>
                <div className="absolute top-1/2 -left-12 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-60 animate-bounce [animation-delay:2s]"></div>

                {/* Phone Image */}
                <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img src="/img/phone.png" alt="BrewPass Mobile App" className="w-80 h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                50K+
              </div>
              <div className="text-slate-600 font-medium">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                200+
              </div>
              <div className="text-slate-600 font-medium">Partner Cafés</div>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                1M+
              </div>
              <div className="text-slate-600 font-medium">Orders Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why choose{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                BrewPass
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {
                "We're revolutionizing how you experience coffee with cutting-edge technology and seamless user experience."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Skip the Queue</h3>
                <p className="text-slate-600 leading-relaxed">
                  Order ahead and collect your coffee without waiting. Perfect for busy mornings.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Loyalty Rewards</h3>
                <p className="text-slate-600 leading-relaxed">
                  Earn points with every purchase and unlock exclusive drinks and discounts.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Send Coffee</h3>
                <p className="text-slate-600 leading-relaxed">
                  Surprise friends and colleagues with their favorite drinks delivered instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to transform your coffee experience?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            {
              "Join thousands of coffee lovers who've already made the switch to smarter coffee ordering."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
              Download for iOS
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-amber-600 transition-colors flex items-center justify-center">
              Download for Android
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">BrewPass</span>
            </div>
            <div className="flex space-x-8 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 BrewPass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
