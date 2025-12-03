import { Shield, Users, Award, Target, Clock, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ParticleBackground from '@/components/effects/ParticleBackground';

export default function AboutUs() {
  const features = [
    {
      icon: Shield,
      title: "الموثوقية",
      description: "نضمن أعلى مستويات الأمان والموثوقية في جميع معاملاتنا"
    },
    {
      icon: Users,
      title: "فريق متخصص",
      description: "يضم فريقنا خبراء متخصصين في التخليص الجمركي"
    },
    {
      icon: Award,
      title: "جودة الخدمة",
      description: "نلتزم بتقديم أعلى معايير الجودة في جميع خدماتنا"
    },
    {
      icon: Target,
      title: "الدقة",
      description: "عمل دقيق ومحترف في جميع المعاملات"
    },
    {
      icon: Clock,
      title: "السرعة",
      description: "التزام بالمواعيد المحددة وإنجاز سريع"
    },
    {
      icon: Zap,
      title: "الكفاءة",
      description: "استخدام أحدث التقنيات لضمان الكفاءة العالية"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
      <ParticleBackground id="about-particles" color="#64748b" opacity={0.4} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">من نحن؟</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  مكتب سليمان الحويطي للتخليص الجمركي والترانزيت هو واحد من الشركات الرائدة في المملكة العربية السعودية في مجال التخليص الجمركي وخدمات الشحن والنقل.
                </p>
                <p>
                  تأسست شركتنا على أسس قوية من الخبرة والاحترافية، حيث نقدم خدمات متكاملة تشمل التخليص الجمركي، النقل البري والبحري والجوي، وخدمات الترانزيت عبر جميع المنافذ الحدودية في المملكة.
                </p>
                <p>
                  نفخر بفريق عملنا المتخصص الذي يتمتع بخبرة واسعة في هذا المجال، والذي يعمل على مدار الساعة لضمان تقديم أفضل الخدمات لعملائنا الكرام.
                </p>
                <p>
                  رؤيتنا هي أن نكون الخيار الأول للعملاء في مجال التخليص الجمركي والخدمات اللوجستية، من خلال تقديم حلول مبتكرة وخدمات عالية الجودة تلبي احتياجاتهم وتتجاوز توقعاتهم.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}