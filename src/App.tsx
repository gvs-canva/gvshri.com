import React from 'react';
import { Award, Users, Zap, Target, Settings, Link, TrendingUp, CheckCircle } from 'lucide-react';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">G V Shri</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Marketing with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI-Powered</span> Strategies
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              I help ambitious businesses unlock exponential growth through cutting-edge AI marketing automation, 
              data-driven strategies, and proven systems that deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Book Free Strategy Call
              </a>
              <a href="#services" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              About G V Shri
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your AI Marketing
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Strategic Partner
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                With over 6 years of proven experience, I've helped ambitious businesses across healthcare, 
                real estate, SaaS, ed-tech, lifestyle, and fintech industries unlock exponential growth 
                through AI-powered marketing strategies.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                I don't just talk about AI marketing – I build it. My proprietary suite of AI tools and 
                automation systems have generated over <span className="font-semibold text-gray-900">$50M+ in revenue</span> for 
                my clients, while reducing their marketing workload by an average of <span className="font-semibold text-gray-900">60%</span>.
              </p>

              {/* Mission Box */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">My Mission</h3>
                <p className="text-gray-600 italic">
                  "To make marketing teams faster, smarter, and more efficient through AI and automation, 
                  so they can focus on what truly matters – driving growth and creating meaningful 
                  connections with their customers."
                </p>
              </div>
            </div>

            {/* Right Column - Stats and Expertise */}
            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">6+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">200+</div>
                  <div className="text-gray-600 text-sm">Businesses Helped</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">50M+</div>
                  <div className="text-gray-600 text-sm">Revenue Generated</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">300%</div>
                  <div className="text-gray-600 text-sm">Avg ROI Increase</div>
                </div>
              </div>

              {/* Core Expertise */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">AI-Powered Marketing Automation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Data-Driven Growth Strategies</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Advanced SEO & Content Systems</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Conversion Rate Optimization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">Multi-Channel Campaign Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Services That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered marketing solutions designed to accelerate your growth and maximize ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Custom AI Marketing Tools */}
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom AI Marketing Tools</h3>
              <p className="text-gray-600 mb-6">
                Bespoke AI solutions tailored to your marketing challenges. From intelligent lead 
                scoring to predictive analytics and content optimization tools.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Lead Scoring & Qualification</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Content AI & Personalization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Predictive Analytics</span>
                </li>
              </ul>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Starting at</div>
                <div className="text-4xl font-bold text-blue-600">$5,000</div>
              </div>
            </div>

            {/* n8n Workflow Automation */}
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Link className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">n8n Workflow Automation</h3>
              <p className="text-gray-600 mb-6">
                Sophisticated n8n workflows that connect your marketing stack, automate repetitive tasks, 
                and ensure seamless data flow across platforms.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Multi-Platform Integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Automated Reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Lead Nurturing Sequences</span>
                </li>
              </ul>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Starting at</div>
                <div className="text-4xl font-bold text-green-600">$2,500</div>
              </div>
            </div>

            {/* Marketing Process Optimization */}
            <div className="bg-purple-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Marketing Process
                <br />
                Optimization
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive audit and optimization of your marketing processes, identifying automation 
                opportunities and efficiency improvements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Process Audit & Analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">ROI Optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">Team Training & Support</span>
                </li>
              </ul>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Starting at</div>
                <div className="text-4xl font-bold text-purple-600">$3,500</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-600">
              Book a free 30-minute strategy call to discover how AI-powered marketing can accelerate your growth
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="ml-3 text-xl font-bold">G V Shri</span>
            </div>
            <p className="text-gray-400 mb-4">AI Marketing Strategic Partner</p>
            <p className="text-gray-500 text-sm">
              © 2024 G V Shri. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}