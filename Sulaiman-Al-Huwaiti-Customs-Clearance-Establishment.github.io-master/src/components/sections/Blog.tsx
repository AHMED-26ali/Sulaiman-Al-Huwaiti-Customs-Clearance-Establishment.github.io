import { BookOpen, FileText, Globe, TrendingUp, Shield, Users, Zap, Target, Truck, Package, Calculator, Building, Award, Heart, Lightbulb, Rocket, Settings, Phone, Compass } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Blog() {
  const blogPosts = [
    {
      icon: FileText,
      title: "دليل شامل للتخليص الجمركي في المملكة العربية السعودية",
      content: "التخليص الجمركي هو عملية معقدة تتطلب خبرة ومعرفة عميقة بالقوانين واللوائح. يشمل التخليص الجمركي عدة خطوات أساسية: تحضير المستندات المطلوبة مثل الفاتورة التجارية وبوليصة الشحن وشهادة المنشأ، تقديم الإقرار الجمركي الإلكتروني، دفع الرسوم والضرائب المستحقة، والحصول على الإذن بالإفراج عن البضائع. نحن في مكتب سليمان الحويطي نقدم خدمات شاملة تشمل جميع هذه الخطوات بكفاءة عالية وسرعة في الإنجاز.",
      category: "إرشادات",
      readTime: "5 دقائق",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Globe,
      title: "أهمية خدمات الترانزيت في التجارة الدولية",
      content: "خدمات الترانزيت تلعب دوراً حيوياً في تسهيل التجارة الدولية، حيث تسمح بمرور البضائع عبر أراضي دولة ما دون دفع رسوم جمركية. هذا النظام يوفر مرونة كبيرة للتجار ويقلل من التكاليف والوقت. في المملكة العربية السعودية، تتميز خدمات الترانزيت بالكفاءة العالية والتقنيات المتطورة. نحن نقدم خدمات ترانزيت شاملة تشمل التنسيق مع الجهات المختصة، تحضير المستندات، ومتابعة الشحنات حتى وصولها لوجهتها النهائية.",
      category: "تجارة دولية",
      readTime: "7 دقائق",
      color: "from-green-500 to-green-700"
    },
    {
      icon: Shield,
      title: "التطورات الجديدة في الأنظمة الجمركية السعودية",
      content: "شهدت الأنظمة الجمركية في المملكة تطورات كبيرة في السنوات الأخيرة، منها تطبيق نظام فسح الإلكتروني، وتبسيط الإجراءات، واستخدام التقنيات الحديثة مثل الذكاء الاصطناعي في فحص البضائع. هذه التطورات تهدف إلى تسريع عمليات التخليص وتقليل الأخطاء البشرية. كما تم تطوير منصات إلكترونية متقدمة تسمح بتتبع الشحنات والحصول على التحديثات الفورية. نحن نواكب جميع هذه التطورات ونستخدم أحدث الأنظمة لضمان خدمة متميزة لعملائنا.",
      category: "أنظمة وقوانين",
      readTime: "6 دقائق",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Target,
      title: "كيفية تجنب الأخطاء الشائعة في التخليص الجمركي",
      content: "هناك أخطاء شائعة يقع فيها المستوردون والمصدرون، مثل عدم دقة البيانات في الإقرار الجمركي، عدم تطابق الفاتورة مع البضائع الفعلية، أو عدم الحصول على التراخيص المطلوبة. هذه الأخطاء قد تؤدي إلى تأخير الشحنات أو فرض غرامات إضافية. لتجنب هذه المشاكل، ننصح بالتأكد من دقة جميع المستندات، الحصول على التراخيص المطلوبة مسبقاً، والتعامل مع مكاتب تخليص معتمدة وذات خبرة. فريقنا المتخصص يراجع جميع المستندات بعناية فائقة لضمان عدم وجود أخطاء.",
      category: "نصائح",
      readTime: "4 دقائق",
      color: "from-red-500 to-red-700"
    },
    {
      icon: Zap,
      title: "مستقبل التجارة الإلكترونية والتخليص الجمركي",
      content: "التجارة الإلكترونية تنمو بسرعة كبيرة وتؤثر على قطاع التخليص الجمركي بطرق متعددة. الشحنات الصغيرة والمتكررة تتطلب أنظمة تخليص أكثر مرونة وسرعة. التقنيات الحديثة مثل البلوك تشين والذكاء الاصطناعي ستلعب دوراً كبيراً في تطوير هذا القطاع. نتوقع أن نرى المزيد من الأتمتة في العمليات، وتطوير أنظمة تخليص فورية للشحنات الصغيرة. نحن نستثمر في هذه التقنيات لنكون جاهزين لمستقبل التجارة الإلكترونية.",
      category: "مستقبل القطاع",
      readTime: "8 دقائق",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      icon: TrendingUp,
      title: "الاتفاقيات التجارية الدولية وأثرها على التخليص",
      content: "الاتفاقيات التجارية الدولية مثل اتفاقية التجارة الحرة الخليجية واتفاقيات منظمة التجارة العالمية تؤثر بشكل كبير على إجراءات التخليص الجمركي. هذه الاتفاقيات تهدف إلى تسهيل التجارة وتقليل الحواجز الجمركية. بعض البضائع تحصل على إعفاءات جمركية أو تخفيضات في الرسوم بموجب هذه الاتفاقيات. من المهم فهم هذه الاتفاقيات والاستفادة منها لتقليل التكاليف. فريقنا متخصص في تطبيق هذه الاتفاقيات وضمان حصول عملائنا على جميع المزايا المتاحة.",
      category: "اتفاقيات دولية",
      readTime: "10 دقائق",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      icon: Users,
      title: "أفضل الممارسات في إدارة سلسلة التوريد",
      content: "إدارة سلسلة التوريد الفعالة تتطلب تخطيطاً دقيقاً وتنسيقاً مستمراً بين جميع الأطراف المعنية. يشمل ذلك الموردين، شركات الشحن، مكاتب التخليص، والعملاء النهائيين. أفضل الممارسات تشمل: التخطيط المسبق للشحنات، استخدام أنظمة تتبع متقدمة، الحفاظ على علاقات قوية مع الشركاء، والاستعداد للطوارئ. التقنيات الحديثة مثل إنترنت الأشياء وتحليل البيانات الضخمة تساعد في تحسين كفاءة سلسلة التوريد. نحن نقدم استشارات شاملة لتحسين سلاسل التوريد لعملائنا.",
      category: "إدارة التوريد",
      readTime: "9 دقائق",
      color: "from-teal-500 to-teal-700"
    },
    {
      icon: Truck,
      title: "التقنيات الحديثة في التخليص الجمركي",
      content: "التقنيات الحديثة تحدث ثورة في قطاع التخليص الجمركي. الذكاء الاصطناعي يساعد في تحليل المستندات وكشف الأخطاء تلقائياً. تقنية البلوك تشين توفر شفافية وأمان أكبر في تتبع الشحنات. الأنظمة السحابية تسمح بالوصول للمعلومات من أي مكان وفي أي وقت. أنظمة التعرف الضوئي على الحروف تسرع من عملية إدخال البيانات. نحن نستخدم أحدث هذه التقنيات لتقديم خدمات أسرع وأكثر دقة لعملائنا، مما يوفر الوقت والجهد ويقلل من احتمالية الأخطاء.",
      category: "تقنيات",
      readTime: "6 دقائق",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: Package,
      title: "إدارة المخاطر في التجارة الدولية",
      content: "التجارة الدولية تنطوي على مخاطر متعددة مثل تقلبات أسعار الصرف، التغيرات في القوانين والأنظمة، المخاطر السياسية، ومخاطر النقل والشحن. إدارة هذه المخاطر تتطلب استراتيجية شاملة تشمل: تنويع الأسواق والموردين، استخدام أدوات التحوط المالي، الحصول على تأمين شامل، ومتابعة التطورات السياسية والاقتصادية. التخطيط المسبق والاستعداد للطوارئ أمران أساسيان. نحن نقدم استشارات متخصصة في إدارة المخاطر ونساعد عملاءنا في وضع استراتيجيات فعالة لحماية أعمالهم.",
      category: "إدارة المخاطر",
      readTime: "7 دقائق",
      color: "from-pink-500 to-pink-700"
    },
    {
      icon: Calculator,
      title: "دور التخليص الجمركي في رؤية المملكة 2030",
      content: "رؤية المملكة 2030 تهدف إلى تطوير القطاع اللوجستي وجعل المملكة مركزاً لوجستياً عالمياً. قطاع التخليص الجمركي يلعب دوراً محورياً في تحقيق هذه الرؤية من خلال تسهيل التجارة وتقليل أوقات التخليص. المشاريع الضخمة مثل نيوم والبحر الأحمر تتطلب خدمات تخليص متطورة وسريعة. الاستثمار في التقنيات الحديثة والتدريب المتخصص سيساهم في تحقيق أهداف الرؤية. نحن فخورون بأن نكون جزءاً من هذا التطوير ونعمل على تطوير خدماتنا لتواكب متطلبات المستقبل.",
      category: "رؤية 2030",
      readTime: "8 دقائق",
      color: "from-cyan-500 to-cyan-700"
    },
    {
      icon: Building,
      title: "التحديات والفرص في قطاع الشحن البحري",
      content: "قطاع الشحن البحري يواجه تحديات متعددة مثل ارتفاع تكاليف الوقود، التغيرات في القوانين البيئية، وازدحام الموانئ. في المقابل، هناك فرص كبيرة للنمو مع زيادة التجارة العالمية وتطوير الموانئ الجديدة. التقنيات الحديثة مثل السفن الذكية والأتمتة في الموانئ تفتح آفاقاً جديدة. المملكة تستثمر بكثافة في تطوير موانئها وجعلها من الأكثر تطوراً في العالم. نحن نتابع هذه التطورات عن كثب ونطور خدماتنا لتلبية احتياجات هذا القطاع المتنامي.",
      category: "شحن بحري",
      readTime: "11 دقائق",
      color: "from-violet-500 to-violet-700"
    },
    {
      icon: Award,
      title: "أهمية التأمين على البضائع في التجارة الدولية",
      content: "التأمين على البضائع أمر أساسي في التجارة الدولية لحماية الاستثمارات من المخاطر المختلفة. هناك أنواع متعددة من التأمين مثل التأمين البحري، التأمين الجوي، وتأمين النقل البري. كل نوع يغطي مخاطر محددة مثل الحوادث، السرقة، التلف، أو الكوارث الطبيعية. اختيار الغطاء التأميني المناسب يتطلب فهماً عميقاً لطبيعة البضائع ومخاطر النقل. شروط التأمين مثل CIF وFOB تحدد مسؤوليات كل طرف. نحن نقدم استشارات شاملة حول التأمين ونساعد عملاءنا في اختيار أفضل الخيارات المتاحة.",
      category: "تأمين",
      readTime: "5 دقائق",
      color: "from-emerald-500 to-emerald-700"
    },
    {
      icon: Heart,
      title: "الشحن الجوي السريع والخدمات المتخصصة",
      content: "الشحن الجوي يتميز بالسرعة والكفاءة، خاصة للبضائع الحساسة والعاجلة. هذا النوع من الشحن يتطلب معاملة خاصة ودقة في التعامل مع المستندات والإجراءات الجمركية. البضائع الطبية والإلكترونيات والمواد سريعة التلف تحتاج لخدمات شحن جوي متخصصة. نحن نقدم خدمات تخليص سريعة في المطارات الدولية مع فريق متخصص متاح على مدار الساعة. كما نوفر خدمات تتبع فورية وتحديثات مستمرة لضمان وصول البضائع في الوقت المحدد وبأفضل حالة.",
      category: "شحن جوي",
      readTime: "6 دقائق",
      color: "from-sky-500 to-sky-700"
    },
    {
      icon: Lightbulb,
      title: "الابتكار في خدمات التخليص الجمركي",
      content: "الابتكار هو مفتاح النجاح في قطاع التخليص الجمركي الحديث. نحن نستثمر في تطوير حلول مبتكرة تشمل استخدام الذكاء الاصطناعي لتحليل المستندات، وتطبيقات الهاتف المحمول لتتبع الشحنات، وأنظمة إدارة المخاطر المتقدمة. كما نطور خدمات رقمية تسمح للعملاء بإدارة معاملاتهم إلكترونياً. هذه الابتكارات تهدف إلى تحسين تجربة العملاء وزيادة كفاءة العمليات. نحن نؤمن بأن الاستثمار في التكنولوجيا والابتكار هو الطريق لتقديم خدمات متميزة تلبي توقعات عملائنا.",
      category: "ابتكار",
      readTime: "7 دقائق",
      color: "from-amber-500 to-amber-700"
    },
    {
      icon: Rocket,
      title: "التدريب والتطوير المهني في قطاع التخليص",
      content: "التدريب المستمر والتطوير المهني أساسيان لضمان تقديم خدمات عالية الجودة في قطاع التخليص الجمركي. نحن نستثمر في تدريب فريقنا على أحدث القوانين والأنظمة والتقنيات. كما نقدم برامج تدريبية للعملاء لمساعدتهم في فهم إجراءات التخليص وتجنب الأخطاء الشائعة. التدريب يشمل ورش عمل متخصصة، دورات إلكترونية، ومؤتمرات مهنية. نؤمن بأن الاستثمار في الموارد البشرية هو أساس النجاح والتميز في تقديم الخدمات.",
      category: "تدريب",
      readTime: "8 دقائق",
      color: "from-rose-500 to-rose-700"
    },
    {
      icon: Settings,
      title: "أنظمة إدارة الجودة في التخليص الجمركي",
      content: "أنظمة إدارة الجودة ضرورية لضمان تقديم خدمات تخليص جمركي متميزة ومتسقة. نحن نطبق معايير الجودة الدولية مثل ISO 9001 في جميع عملياتنا. هذا يشمل وضع إجراءات واضحة، مراقبة الأداء، والتحسين المستمر. نقوم بمراجعة دورية لعملياتنا وجمع ملاحظات العملاء لتطوير خدماتنا. كما نستخدم مؤشرات الأداء الرئيسية لقياس كفاءة عملياتنا وضمان تحقيق أهدافنا في الجودة والسرعة. هذا النهج المنهجي يضمن رضا العملاء والتميز في الخدمة.",
      category: "جودة",
      readTime: "9 دقائق",
      color: "from-indigo-500 to-purple-700"
    },
    {
      icon: Phone,
      title: "خدمة العملاء والدعم الفني المتطور",
      content: "خدمة العملاء هي قلب عملياتنا في التخليص الجمركي. نحن نوفر دعماً فنياً متخصصاً على مدار الساعة لضمان حل جميع المشاكل والاستفسارات بسرعة وكفاءة. فريق خدمة العملاء لدينا مدرب على أعلى مستوى ويمتلك خبرة واسعة في جميع جوانب التخليص الجمركي. نستخدم أنظمة إدارة علاقات العملاء المتقدمة لتتبع جميع التفاعلات وضمان المتابعة المناسبة. كما نوفر قنوات تواصل متعددة تشمل الهاتف، البريد الإلكتروني، والواتساب، مما يسهل على العملاء الوصول إلينا في أي وقت.",
      category: "خدمة العملاء",
      readTime: "6 دقائق",
      color: "from-green-500 to-teal-700"
    },
    {
      icon: Compass,
      title: "استراتيجيات التوسع الإقليمي في الأسواق الناشئة",
      content: "التوسع في الأسواق الناشئة يتطلب فهماً عميقاً للثقافات المحلية والأنظمة التجارية المختلفة. نحن نطور استراتيجيات توسع مدروسة تأخذ في الاعتبار التحديات الفريدة لكل سوق، مثل اللوائح المحلية، البنية التحتية، والعادات التجارية. يشمل ذلك إقامة شراكات استراتيجية مع الشركات المحلية، تدريب الفرق على الثقافات المختلفة، وتطوير حلول مخصصة لكل منطقة. كما نستثمر في دراسة الأسواق الجديدة وتحليل المخاطر والفرص المتاحة. هدفنا هو تقديم خدمات التخليص الجمركي بنفس المعايير العالية في جميع الأسواق التي نعمل بها، مع مراعاة الخصوصيات المحلية لكل منطقة.",
      category: "توسع إقليمي",
      readTime: "12 دقائق",
      color: "from-emerald-500 to-blue-700"
    }
  ];

  return (
    <section id="blog" className="py-20 text-white relative overflow-hidden section-transparent">
      {/* Enhanced Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* كرات متحركة كبيرة مع تفاعل الماوس */}
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/15 to-purple-300/15 rounded-full blur-3xl animate-float-blog-slow interactive-orb-blog"></div>
        <div className="absolute top-24 -right-48 w-[500px] h-[500px] bg-gradient-to-br from-green-300/15 to-teal-300/15 rounded-full blur-3xl animate-float-blog-medium interactive-orb-blog"></div>
        <div className="absolute -bottom-48 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-purple-300/15 to-pink-300/15 rounded-full blur-3xl animate-float-blog-fast interactive-orb-blog"></div>
        <div className="absolute bottom-24 -right-24 w-[400px] h-[400px] bg-gradient-to-br from-orange-300/15 to-red-300/15 rounded-full blur-3xl animate-float-blog-reverse interactive-orb-blog"></div>
        <div className="absolute top-1/2 left-1/6 w-[350px] h-[350px] bg-gradient-to-br from-yellow-300/15 to-orange-300/15 rounded-full blur-3xl animate-float-blog-diagonal interactive-orb-blog"></div>
        <div className="absolute top-16 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-cyan-300/15 to-blue-300/15 rounded-full blur-3xl animate-float-blog-spiral interactive-orb-blog"></div>
        
        {/* أشكال هندسية متفاعلة */}
        <div className="absolute top-1/5 right-1/5 w-20 h-20 bg-gradient-to-br from-teal-400/40 to-cyan-400/40 transform rotate-45 animate-rotate-blog-slow interactive-shape-blog"></div>
        <div className="absolute bottom-1/5 left-1/4 w-16 h-32 bg-gradient-to-br from-purple-400/40 to-pink-400/40 animate-rotate-blog-medium interactive-shape-blog"></div>
        <div className="absolute top-3/5 right-1/6 w-24 h-24 bg-gradient-to-br from-green-400/40 to-lime-400/40 rounded-full animate-rotate-blog-fast interactive-shape-blog" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="absolute bottom-2/5 left-1/6 w-18 h-18 bg-gradient-to-br from-orange-400/40 to-red-400/40 animate-rotate-blog-reverse interactive-shape-blog"></div>
        
        {/* جسيمات متحركة صغيرة */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse interactive-particle-blog"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-500/20 rounded-full animate-bounce interactive-particle-blog"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full animate-ping interactive-particle-blog"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-yellow-500/20 rounded-full animate-pulse interactive-particle-blog"></div>
        <div className="absolute bottom-1/3 left-1/2 w-28 h-28 bg-red-500/20 rounded-full animate-bounce interactive-particle-blog"></div>
        <div className="absolute top-10 right-10 w-36 h-36 bg-indigo-500/20 rounded-full animate-spin-slow interactive-particle-blog"></div>
        
        {/* خطوط SVG متحركة */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blogGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="blogGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path d="M0,100 Q300,50 600,100 T1200,100" stroke="url(#blogGrad1)" strokeWidth="3" fill="none">
            <animate attributeName="stroke-dasharray" values="0,1200;1200,0;0,1200" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M0,300 Q400,200 800,300 T1600,300" stroke="url(#blogGrad2)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-dasharray" values="1200,0;0,1200;1200,0" dur="10s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-400 to-zinc-400 bg-clip-text text-transparent">
            مدونتنا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اطلع على آخر المقالات والأخبار في مجال التخليص الجمركي والتجارة الدولية
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-zinc-500 mx-auto mt-6 rounded-full animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 overflow-hidden animate-card-entrance interactive-blog-card"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <span className="bg-slate-700 text-slate-200 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center space-x-1 space-x-reverse">
                    <BookOpen className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse mb-3">
                  <div className={`p-2 bg-gradient-to-r ${post.color} rounded-full group-hover:scale-110 transition-transform duration-300 interactive-blog-icon`}>
                    <post.icon className="h-4 w-4 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-white group-hover:text-slate-300 transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 text-sm leading-relaxed text-justify group-hover:text-white transition-colors">
                  {post.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Mouse interaction effects */
        .interactive-orb-blog:hover {
          transform: scale(1.4) !important;
          filter: blur(2xl) brightness(1.6);
          transition: all 0.3s ease;
        }
        
        .interactive-shape-blog:hover {
          transform: scale(1.3) rotate(90deg) !important;
          filter: brightness(1.5);
          transition: all 0.3s ease;
        }
        
        .interactive-particle-blog:hover {
          transform: scale(1.5) !important;
          opacity: 1 !important;
          filter: brightness(2);
          transition: all 0.2s ease;
        }
        
        .interactive-blog-card:hover {
          transform: translateY(-8px) scale(1.05) rotate(2deg) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        
        .interactive-blog-icon:hover {
          transform: scale(1.3) rotate(15deg);
          filter: brightness(1.4);
        }

        @keyframes float-blog-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(50px, -50px) rotate(90deg) scale(1.15); }
          50% { transform: translate(-30px, -60px) rotate(180deg) scale(0.85); }
          75% { transform: translate(-60px, 30px) rotate(270deg) scale(1.05); }
        }
        
        @keyframes float-blog-medium {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(-55px, 45px) rotate(120deg) scale(1.2); }
          66% { transform: translate(45px, -55px) rotate(240deg) scale(0.8); }
        }
        
        @keyframes float-blog-fast {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(60px, -70px) rotate(180deg) scale(1.25); }
        }
        
        @keyframes float-blog-reverse {
          0%, 100% { transform: translate(0, 0) rotate(360deg) scale(1); }
          50% { transform: translate(-65px, 55px) rotate(180deg) scale(0.75); }
        }
        
        @keyframes float-blog-diagonal {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(45px, 45px) rotate(45deg) scale(1.1); }
          50% { transform: translate(-45px, -45px) rotate(90deg) scale(0.9); }
          75% { transform: translate(-55px, 55px) rotate(135deg) scale(1.05); }
        }
        
        @keyframes float-blog-spiral {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(40px, -20px) rotate(90deg) scale(1.1); }
          50% { transform: translate(0, -40px) rotate(180deg) scale(0.9); }
          75% { transform: translate(-40px, -20px) rotate(270deg) scale(1.05); }
          100% { transform: translate(0, 0) rotate(360deg) scale(1); }
        }
        
        @keyframes rotate-blog-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-blog-medium {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes rotate-blog-fast {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-blog-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes card-entrance {
          0% { opacity: 0; transform: translateY(100px) rotateX(90deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        
        .animate-float-blog-slow { animation: float-blog-slow 20s ease-in-out infinite; }
        .animate-float-blog-medium { animation: float-blog-medium 16s ease-in-out infinite; }
        .animate-float-blog-fast { animation: float-blog-fast 12s ease-in-out infinite; }
        .animate-float-blog-reverse { animation: float-blog-reverse 24s ease-in-out infinite; }
        .animate-float-blog-diagonal { animation: float-blog-diagonal 18s ease-in-out infinite; }
        .animate-float-blog-spiral { animation: float-blog-spiral 22s ease-in-out infinite; }
        .animate-rotate-blog-slow { animation: rotate-blog-slow 18s linear infinite; }
        .animate-rotate-blog-medium { animation: rotate-blog-medium 13s linear infinite; }
        .animate-rotate-blog-fast { animation: rotate-blog-fast 9s linear infinite; }
        .animate-rotate-blog-reverse { animation: rotate-blog-reverse 15s linear infinite; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        .animate-card-entrance { animation: card-entrance 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </section>
  );
}