import React from 'react';
import { supabase, type ContactSubmission } from './lib/supabase';
import { 
  Calendar,
  CheckCircle,
  Star,
  Phone,
  Mail,
  ExternalLink,
  Zap,
  TrendingUp,
  Award,
  Users,
  DollarSign,
  Target,
  BarChart3,
  Brain,
  Settings,
  MessageCircle,
  Clock,
  Shield,
  ArrowRight,
  Building2,
  Home,
  Monitor,
  GraduationCap,
  Heart,
  CreditCard,
  Linkedin,
  Twitter,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState('');

  const testimonials = [
    {
      quote: "G V Shri completely transformed our marketing approach. His AI-powered lead generation system increased our qualified leads by 280% in just 90 days. The ROI has been phenomenal.",
      name: "Sarah Chen",
      title: "VP Marketing",
      company: "HealthTech Solutions • Healthcare",
      metric: "+280% qualified leads"
    },
    {
      quote: "Working with G V Shri was a game-changer for our SaaS company. His automation systems saved our team 25 hours per week while increasing our MRR by 320%. Absolutely incredible results.",
      name: "Michael Rodriguez",
      title: "CEO",
      company: "CloudSync Pro • SaaS",
      metric: "+320% MRR growth"
    },
    {
      quote: "The AI chatbot G V Shri built for our recruitment process has been revolutionary. It handles 80% of our initial candidate screening, allowing our team to focus on high-value activities.",
      name: "Jennifer Walsh",
      title: "Head of Talent Acquisition",
      company: "TechTalent Co • Ed-Tech",
      metric: "80% automated screening"
    },
    {
      quote: "G V Shri's AI marketing strategy helped us penetrate the competitive real estate market. We saw a 180% increase in qualified leads and reduced our customer acquisition cost by 40%.",
      name: "David Thompson",
      title: "Marketing Director",
      company: "Premier Properties • Real Estate",
      metric: "+180% leads, -40% CAC"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const submission: Omit<ContactSubmission, 'id' | 'created_at'> = {
      full_name: formData.get('fullName') as string,
      email: formData.get('email') as string,
      company_name: formData.get('companyName') as string || undefined,
      industry: formData.get('industry') as string || undefined,
      biggest_challenge: formData.get('biggestChallenge') as string,
      timeline: formData.get('timeline') as string || undefined,
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([submission]);

      if (error) throw error;

      setSubmitMessage('Thank you! Your strategy call request has been submitted. I\'ll reach out within 24 hours.');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Sorry, there was an error submitting your request. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GV</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">G V Shri</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              6+ Years Digital Marketing Excellence
            </div>
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Strategy Call</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Accelerate Growth with<br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI-Powered Marketing
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            I help ambitious businesses <strong className="text-gray-900">3x their revenue</strong> using data-driven 
            strategies, cutting-edge AI tools, and proven automation systems that 
            deliver <strong className="text-gray-900">measurable results in 90 days or less</strong>
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Automation</h3>
              <p className="text-gray-600 text-sm">Save 20+ hours/week</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data-Driven Results</h3>
              <p className="text-gray-600 text-sm">Average 300% ROI increase</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven Across Industries</h3>
              <p className="text-gray-600 text-sm">Healthcare to FinTech</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span>Book Your Strategy Call Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => document.getElementById('ai-tools')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-700 px-8 py-4 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              View My AI Tools
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-gray-500 mb-4">Trusted by marketing teams at</p>
            <div className="flex justify-center space-x-8 text-gray-400">
              <span>Healthcare Leaders</span>
              <span>SaaS Companies</span>
              <span>FinTech Startups</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              About G V Shri
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Your AI Marketing<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Strategic Partner
                </span>
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 6 years of proven experience, I've helped ambitious businesses across healthcare, real estate, SaaS, ed-tech, lifestyle, and fintech industries unlock exponential growth through AI-powered marketing strategies.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                I don't just talk about AI marketing – I build it. My proprietary suite of AI tools and automation systems have generated over <strong className="text-gray-900">$50M+ in revenue</strong> for my clients, while reducing their marketing workload by an average of <strong className="text-gray-900">60%</strong>.
              </p>

              {/* Mission */}
              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">My Mission</h3>
                <p className="text-gray-600 italic">
                  "To make marketing teams faster, smarter, and more efficient through AI and automation, so they can focus on what truly matters – driving growth and creating meaningful connections with their customers."
                </p>
              </div>

            </div>

            {/* Right Column - Stats Grid and Core Expertise */}
            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">6+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                  <div className="text-gray-600 text-sm">Businesses Helped</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">50M+</div>
                  <div className="text-gray-600 text-sm">Revenue Generated</div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">300%</div>
                  <div className="text-gray-600 text-sm">Avg ROI Increase</div>
                </div>
              </div>

              {/* Core Expertise */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Core Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">AI-Powered Marketing Automation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Data-Driven Growth Strategies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Advanced SEO & Content Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Conversion Rate Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Multi-Channel Campaign Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                What I Do
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Services That Drive<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and automation solutions designed specifically for marketing teams
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Custom AI Marketing Tools */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom AI Marketing Tools</h3>
              <p className="text-gray-600 mb-6">
                Bespoke AI solutions tailored to your marketing challenges. From intelligent lead scoring to predictive analytics and content optimization tools.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Lead Scoring & Qualification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Content AI & Personalization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Predictive Analytics</span>
                </li>
              </ul>
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">Starting at</div>
                <div className="text-4xl font-bold text-blue-600">$5,000</div>
              </div>
            </div>

            {/* n8n Workflow Automation */}
            <div className="bg-green-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <ExternalLink className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">n8n Workflow Automation</h3>
              <p className="text-gray-600 mb-6">
                Sophisticated n8n workflows that connect your marketing stack, automate repetitive tasks, and ensure seamless data flow across platforms.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Multi-Platform Integration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Automated Reporting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Lead Nurturing Sequences</span>
                </li>
              </ul>
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">Starting at</div>
                <div className="text-4xl font-bold text-green-600">$2,500</div>
              </div>
            </div>

            {/* Marketing Process Optimization */}
            <div className="bg-purple-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Process<br />Optimization</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive audit and optimization of your marketing processes, identifying automation opportunities and efficiency improvements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Process Audit & Analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">ROI Optimization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Team Training & Support</span>
                </li>
              </ul>
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">Starting at</div>
                <div className="text-4xl font-bold text-purple-600">$3,500</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Transform Your Marketing?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs and create a custom solution that delivers measurable results for your business.
            </p>
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 mx-auto"
            >
              <span>Discuss Your Needs</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="ai-tools" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Portfolio & Case Studies
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              My Arsenal of<br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Custom AI Tools
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. Here are some of the AI-powered marketing solutions I've built for companies ranging from Series B startups to $50M+ enterprises.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* AI-Powered Lead Scoring System */}
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">AI-Powered Lead Scoring System</h3>
              </div>
              <p className="text-gray-600 text-sm mb-6">SaaS Company • Series B</p>
              <p className="text-gray-700 mb-8">
                Developed a custom AI model that analyzes lead behavior, demographic data, and engagement patterns to predict conversion probability with 94% accuracy.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">+45%</div>
                  <div className="text-gray-600 text-sm">Conversion Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">60%</div>
                  <div className="text-gray-600 text-sm">Time Saved</div>
                </div>
              </div>
              <div className="flex space-x-2 text-xs">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Python</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Machine Learning</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">API Integration</span>
              </div>
            </div>

            {/* Multi-Channel Marketing Automation */}
            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Multi-Channel Marketing Automation</h3>
              </div>
              <p className="text-gray-600 text-sm mb-6">E-commerce • $50M+ Revenue</p>
              <p className="text-gray-700 mb-8">
                Built comprehensive n8n workflows connecting CRM, email marketing, social media, and analytics platforms for seamless omnichannel campaigns.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">80%</div>
                  <div className="text-gray-600 text-sm">Time Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">$2M+</div>
                  <div className="text-gray-600 text-sm">Revenue Impact</div>
                </div>
              </div>
              <div className="flex space-x-2 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">n8n</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">CRM Integration</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Analytics</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Intelligent Content Personalization */}
            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Intelligent Content Personalization</h3>
              </div>
              <p className="text-gray-600 text-sm mb-6">Media Company • 10M+ Users</p>
              <p className="text-gray-700 mb-8">
                Created an AI system that dynamically personalizes content recommendations and email campaigns based on user behavior and preferences.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">3x</div>
                  <div className="text-gray-600 text-sm">Engagement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">25%</div>
                  <div className="text-gray-600 text-sm">Revenue Lift</div>
                </div>
              </div>
              <div className="flex space-x-2 text-xs">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">NLP</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Recommendation Engine</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">A/B Testing</span>
              </div>
            </div>

            {/* Predictive Analytics Dashboard */}
            <div className="bg-orange-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Predictive Analytics Dashboard</h3>
              </div>
              <p className="text-gray-600 text-sm mb-6">FinTech Startup • Series A</p>
              <p className="text-gray-700 mb-8">
                Developed a comprehensive analytics platform that predicts customer lifetime value, churn risk, and optimal marketing spend allocation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">40%</div>
                  <div className="text-gray-600 text-sm">ROI Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-1">-30%</div>
                  <div className="text-gray-600 text-sm">Churn Reduction</div>
                </div>
              </div>
              <div className="flex space-x-2 text-xs">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Data Science</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Visualization</span>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">Forecasting</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
            >
              <span>Start Your Success Story</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Industry Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Industries & Results
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Proven Results Across<br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Multiple Industries
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My AI-powered strategies deliver exceptional results across diverse industries, each with unique challenges and opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">+85% lead generation</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Estate</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">+120% conversion rates</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Monitor className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SaaS</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">+200% qualified leads</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <GraduationCap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ed-Tech</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">+150% user acquisition</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lifestyle</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">+90% brand engagement</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fintech</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">+175% customer acquisition</div>
            </div>
          </div>

          {/* Cross-Industry Stats */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Cross-Industry Expertise That Delivers</h3>
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
                <div className="text-gray-600">Industries Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-gray-600">Campaigns Launched</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
                <div className="text-gray-600">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                Client Success Stories
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Real Results from<br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Real Businesses
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what industry leaders say about working with me and the results they've achieved.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-12 rounded-2xl relative">
              <div className="text-8xl text-blue-200 absolute top-4 left-8 font-serif">"</div>
              <div className="relative z-10">
                <p className="text-2xl text-gray-900 font-medium mb-8 leading-relaxed italic">
                  {testimonials[currentTestimonial].quote}
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex justify-center mb-6">
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                    {testimonials[currentTestimonial].metric}
                  </span>
                </div>

                <div className="text-center">
                  <div className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].title}</div>
                  <div className="text-blue-600 font-medium">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Stats */}
          <div className="grid lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">90</div>
              <div className="text-gray-600">Days to Results</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">AI-Powered Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                Ready to Get Started?
              </span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Let's Build Your<br />
              <span className="text-yellow-300">AI Marketing Empire</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Book a 30-minute strategy call where we'll analyze your current marketing, identify growth opportunities, and create a custom AI roadmap for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Book Your Strategy Call Now</h3>
              <p className="text-gray-600 mb-8">Fill out this form and I'll personally reach out within 24 hours</p>
              
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="you@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      name="companyName"
                      placeholder="Your company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                    <select name="industry" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select industry</option>
                      <option>Healthcare</option>
                      <option>SaaS</option>
                      <option>E-commerce</option>
                      <option>FinTech</option>
                      <option>Real Estate</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Biggest Marketing Challenge *</label>
                  <textarea 
                    name="biggestChallenge"
                    placeholder="What's your biggest marketing challenge right now?"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline to Get Started</label>
                  <select name="timeline" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select timeline</option>
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>Within 3 months</option>
                    <option>Just exploring</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Book My Strategy Call'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              {submitMessage && (
                <div className={`mt-4 p-4 rounded-lg ${
                  submitMessage.includes('Thank you') 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              <p className="text-xs text-gray-500 mt-4">
                By submitting this form, you agree to receive marketing communications. Unsubscribe at any time.
              </p>
            </div>

            {/* What You'll Get */}
            <div className="text-white">
              <h3 className="text-2xl font-semibold mb-8">What You'll Get in Our Call:</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Marketing Audit</h4>
                    <p className="text-white/80">Comprehensive analysis of your current marketing performance and gaps</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-1">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">AI Opportunity Map</h4>
                    <p className="text-white/80">Custom roadmap showing exactly how AI can accelerate your growth</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quick Wins Strategy</h4>
                    <p className="text-white/80">3 actionable strategies you can implement immediately for results</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">90-Day Growth Plan</h4>
                    <p className="text-white/80">Step-by-step plan to achieve measurable results in the next quarter</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="w-5 h-5 text-yellow-300" />
                    <h4 className="font-semibold">My Guarantee to You</h4>
                  </div>
                  <p className="text-white/80 text-sm">
                    If we don't identify at least 3 actionable opportunities to improve your marketing ROI or improve your team's productivity during our call, I'll send you a refund 100% of what you paid. That's how confident I am in the value I provide.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-xl">
                  <h4 className="font-semibold mb-4">Prefer to Contact Directly?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-white/70" />
                      <span className="text-sm">gvshri@example.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GV</span>
                </div>
                <span className="text-xl font-semibold">G V Shri</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Digital Marketing Strategist & AI Marketing Innovator helping businesses accelerate growth through AI, automation, and data-driven strategies.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5 text-gray-400" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Book a Call</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Email Me</a></li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-800 p-8 rounded-2xl mt-12">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Ready to Accelerate Your Growth?</h3>
                <p className="text-gray-400">Book your no-obligation strategy call today.</p>
              </div>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 mt-6 lg:mt-0"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Strategy Call</span>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-400">© 2025 G V Shri. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;