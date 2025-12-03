import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      name: "سليمان الحويطي",
      phone: "+966559586786"
    },
    {
      name: "إبراهيم جمعة",
      phone: "+966509457627"
    },
    {
      name: "أحمد علي",
      phone: "+966551046758"
    },
    {
      name: "علاء جاد",
      phone: "+966553992052"
    }
  ];

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleWhatsApp = (phone: string) => {
    window.open(`https://wa.me/${phone.replace('+', '')}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const whatsappMessage = `السلام عليكم، اسمي ${formData.name}، رقم هاتفي ${formData.phone}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const ahmadAliPhone = "966551046758"; // أحمد علي
    
    window.open(`https://wa.me/${ahmadAliPhone}?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const companyInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      details: ["alebawani.ksa@hotmail.com"],
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      icon: MapPin,
      title: "المقر الرئيسي",
      details: ["المملكة العربية السعودية - تبوك - ضبا"],
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      details: ["متاح 24/7 لخدمتكم"],
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10"
    }
  ];

  return (
    <section id="contact" className="py-20 text-white relative overflow-hidden section-transparent">
      {/* خلفية متحركة محسنة */}
      <div className="absolute inset-0">
        {/* كرات متحركة كبيرة */}
        <div className="absolute -top-56 -left-56 w-[700px] h-[700px] bg-gradient-to-br from-blue-300/18 to-purple-300/18 rounded-full blur-3xl animate-float-mega-slow"></div>
        <div className="absolute top-16 -right-56 w-[600px] h-[600px] bg-gradient-to-br from-green-300/18 to-teal-300/18 rounded-full blur-3xl animate-float-mega-medium"></div>
        <div className="absolute -bottom-56 left-1/5 w-[550px] h-[550px] bg-gradient-to-br from-purple-300/18 to-pink-300/18 rounded-full blur-3xl animate-float-mega-fast"></div>
        <div className="absolute bottom-16 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-orange-300/18 to-red-300/18 rounded-full blur-3xl animate-float-mega-reverse"></div>
        <div className="absolute top-1/2 left-1/8 w-[450px] h-[450px] bg-gradient-to-br from-yellow-300/18 to-orange-300/18 rounded-full blur-3xl animate-float-mega-diagonal"></div>
        <div className="absolute top-8 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-300/18 to-blue-300/18 rounded-full blur-3xl animate-float-mega-spiral"></div>
        
        {/* كرات متحركة متوسطة */}
        <div className="absolute top-1/6 left-1/8 w-32 h-32 bg-blue-400/15 rounded-full animate-particle-mega-1 blur-sm"></div>
        <div className="absolute top-2/6 right-1/7 w-28 h-28 bg-green-400/15 rounded-full animate-particle-mega-2 blur-sm"></div>
        <div className="absolute bottom-1/6 left-1/2 w-36 h-36 bg-purple-400/15 rounded-full animate-particle-mega-3 blur-sm"></div>
        <div className="absolute top-3/6 right-1/8 w-30 h-30 bg-orange-400/15 rounded-full animate-particle-mega-4 blur-sm"></div>
        <div className="absolute bottom-2/6 right-2/6 w-34 h-34 bg-yellow-400/15 rounded-full animate-particle-mega-5 blur-sm"></div>
        <div className="absolute top-4/6 left-1/6 w-26 h-26 bg-teal-400/15 rounded-full animate-particle-mega-6 blur-sm"></div>
        
        {/* جسيمات صغيرة سريعة */}
        <div className="absolute top-32 left-32 w-14 h-14 bg-blue-500/40 rounded-full animate-sparkle-mega-fast"></div>
        <div className="absolute top-64 right-64 w-12 h-12 bg-green-500/40 rounded-full animate-sparkle-mega-medium"></div>
        <div className="absolute bottom-56 left-56 w-16 h-16 bg-purple-500/40 rounded-full animate-sparkle-mega-slow"></div>
        <div className="absolute top-128 right-48 w-13 h-13 bg-orange-500/40 rounded-full animate-sparkle-mega-fast"></div>
        <div className="absolute bottom-72 right-128 w-15 h-15 bg-yellow-500/40 rounded-full animate-sparkle-mega-medium"></div>
        <div className="absolute top-144 left-128 w-11 h-11 bg-teal-500/40 rounded-full animate-sparkle-mega-slow"></div>
        
        {/* مجسمات هندسية */}
        <div className="absolute top-1/6 left-1/6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rotate-45 animate-rotate-slow blur-sm"></div>
        <div className="absolute top-5/6 right-1/6 w-28 h-28 bg-gradient-to-br from-green-400/20 to-blue-400/20 animate-rotate-medium blur-sm" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="absolute bottom-1/6 left-5/6 w-22 h-22 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full animate-rotate-fast blur-sm"></div>
        <div className="absolute top-2/6 right-2/6 w-18 h-36 bg-gradient-to-br from-purple-400/20 to-pink-400/20 animate-rotate-reverse blur-sm"></div>
        
        {/* خطوط SVG محسنة */}
        <svg className="absolute inset-0 w-full h-full opacity-8" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="contactLineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#8B5CF6" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#F59E0B" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="contactLineGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#14B8A6" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#F97316" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d="M0,80 Q350,40 700,80 T1400,80" stroke="url(#contactLineGrad1)" strokeWidth="5" fill="none">
            <animate attributeName="stroke-dasharray" values="0,1600;1600,0;0,1600" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M0,200 Q450,120 900,200 T1800,200" stroke="url(#contactLineGrad2)" strokeWidth="4" fill="none">
            <animate attributeName="stroke-dasharray" values="1600,0;0,1600;1600,0" dur="12s" repeatCount="indefinite" />
          </path>
          <path d="M0,320 Q300,240 600,320 T1200,320" stroke="url(#contactLineGrad1)" strokeWidth="4" fill="none">
            <animate attributeName="stroke-dasharray" values="0,1200;1200,0;0,1200" dur="14s" repeatCount="indefinite" />
          </path>
          <path d="M0,440 Q400,360 800,440 T1600,440" stroke="url(#contactLineGrad2)" strokeWidth="5" fill="none">
            <animate attributeName="stroke-dasharray" values="1400,0;0,1400;1400,0" dur="16s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Background Effects الأصلية */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-300 via-white to-green-300 bg-clip-text text-transparent">
              تواصل معنا
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا لأي استفسار أو طلب خدمة
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-2xl mb-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-white flex items-center justify-center gap-3">
                  <MessageCircle className="h-8 w-8 text-blue-400" />
                  رسالة سريعة
                </CardTitle>
                <CardDescription className="text-gray-300">
                  سيتم تحويل رسالتك مباشرة إلى أحمد علي عبر الواتساب
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      الاسم الكامل
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك الكامل"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      رقم الهاتف
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="05xxxxxxxx"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      الرسالة
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 rounded-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        جاري الإرسال...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        إرسال الرسالة
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Company Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-blue-400" />
                معلومات التواصل
              </h3>
              {companyInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group p-6 rounded-2xl ${info.bgColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className={`p-3 rounded-full ${info.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-300 group-hover:text-white transition-colors duration-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-white">فريق العمل</h3>
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-0 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:rotate-1 group shadow-2xl">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-white text-lg text-center group-hover:text-blue-300 transition-colors">
                      {contact.name}
                    </CardTitle>
                    <div className="text-center">
                      <p className="text-blue-200 font-mono text-lg">{contact.phone}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex space-x-3 space-x-reverse w-full">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-orange-400 text-orange-300 bg-orange-500/20 hover:bg-orange-500 hover:border-orange-500 hover:text-white flex-1 transform hover:scale-110 transition-all duration-300 hover:shadow-lg animate-bounce font-bold"
                          onClick={() => handleCall(contact.phone)}
                          style={{
                            animationDelay: `${index * 200}ms`,
                            animationDuration: '2s'
                          }}
                        >
                          <Phone className="ml-2 h-4 w-4" />
                          اتصال
                        </Button>
                        <Button 
                          size="sm" 
                          className="bg-green-600 text-green-100 hover:bg-green-700 hover:text-white hover:shadow-2xl flex-1 transform hover:scale-110 transition-all duration-300 animate-pulse font-bold"
                          onClick={() => handleWhatsApp(contact.phone)}
                          style={{
                            animationDelay: `${index * 300}ms`,
                            animationDuration: '3s'
                          }}
                        >
                          <MessageCircle className="ml-2 h-4 w-4" />
                          واتساب
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Map or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 animate-pulse shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">نخدمكم في جميع أنحاء المملكة</h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              مع شبكة واسعة من الفروع والمكاتب في أهم المنافذ الحدودية، نضمن لكم خدمة سريعة وموثوقة أينما كنتم
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float-mega-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(50px, -50px) rotate(90deg) scale(1.15); }
          50% { transform: translate(-30px, -60px) rotate(180deg) scale(0.85); }
          75% { transform: translate(-60px, 30px) rotate(270deg) scale(1.05); }
        }
        
        @keyframes float-mega-medium {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(-55px, 45px) rotate(120deg) scale(1.2); }
          66% { transform: translate(45px, -55px) rotate(240deg) scale(0.8); }
        }
        
        @keyframes float-mega-fast {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(60px, -70px) rotate(180deg) scale(1.25); }
        }
        
        @keyframes float-mega-reverse {
          0%, 100% { transform: translate(0, 0) rotate(360deg) scale(1); }
          50% { transform: translate(-65px, 55px) rotate(180deg) scale(0.75); }
        }
        
        @keyframes float-mega-diagonal {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(45px, 45px) rotate(45deg) scale(1.1); }
          50% { transform: translate(-45px, -45px) rotate(90deg) scale(0.9); }
          75% { transform: translate(-55px, 55px) rotate(135deg) scale(1.05); }
        }
        
        @keyframes float-mega-spiral {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(40px, -20px) rotate(90deg) scale(1.1); }
          50% { transform: translate(0, -40px) rotate(180deg) scale(0.9); }
          75% { transform: translate(-40px, -20px) rotate(270deg) scale(1.05); }
          100% { transform: translate(0, 0) rotate(360deg) scale(1); }
        }
        
        .animate-float-mega-slow { animation: float-mega-slow 20s ease-in-out infinite; }
        .animate-float-mega-medium { animation: float-mega-medium 16s ease-in-out infinite; }
        .animate-float-mega-fast { animation: float-mega-fast 12s ease-in-out infinite; }
        .animate-float-mega-reverse { animation: float-mega-reverse 24s ease-in-out infinite; }
        .animate-float-mega-diagonal { animation: float-mega-diagonal 18s ease-in-out infinite; }
        .animate-float-mega-spiral { animation: float-mega-spiral 22s ease-in-out infinite; }
      `}</style>
    </section>
  );
}