import { ArrowRight, CheckCircle, Star, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/effects/ParticleBackground';

export default function Welcome() {
  const achievements = [
    { icon: Users, number: "2000+", label: "عميل راضي" },
    { icon: CheckCircle, number: "8000+", label: "معاملة مكتملة" },
    { icon: Star, number: "15+", label: "سنة خبرة" },
    { icon: Award, number: "5", label: "فروع ومواقع" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
      <ParticleBackground id="welcome-particles" color="#10b981" opacity={0.5} />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            مرحباً بكم في مكتب سليمان الحويطي
          </h2>
          
          <p className="text-xl md:text-2xl text-green-200 leading-relaxed mb-8">
            شريككم الموثوق في التخليص الجمركي والترانزيت
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            نفخر بخدمة عملائنا الكرام منذ أكثر من 15 عاماً، ونقدم خدمات متكاملة في التخليص الجمركي والنقل والشحن 
            عبر جميع المنافذ الحدودية في المملكة العربية السعودية. فريقنا المتخصص يعمل على مدار الساعة لضمان 
            تقديم أفضل الخدمات وتحقيق رضا عملائنا.
          </p>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <achievement.icon className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-gray-300 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <p className="text-xl text-green-200">
              هل تحتاج إلى خدمات التخليص الجمركي؟
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              onClick={scrollToContact}
            >
              تواصل معنا الآن
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}