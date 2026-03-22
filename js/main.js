/* ----------------------------------------------------
   LANGUAGE / TRANSLATION
   ---------------------------------------------------- */
const translations = {
    en: {
        nav_home: "Home",
        nav_games: "Games",
        nav_plus: "Plus",
        nav_styles: "Play Styles",
        nav_support: "Support",
        hero_platform: "Exclusive PlayStation Gaming",
        hero_desc: "Experience the next generation of gaming. Exclusive titles, premium gear, and the best deals on PlayStation 5.",
        hero_btn: "Shop Now",
        games_title: '<i class="fas fa-gamepad"></i> Trending <span style="color: var(--accent-red)">Arrivals</span>',
        filter_all: "All",
        filter_action: "Action",
        filter_sports: "Sports",
        smart_picker: "Help Me Choose a Game 🎮",
        search_placeholder: "Search games...",
        plus_tagline: "Elevate your gaming experience with premium access.",
        plus_btn: "Join Now",
        footer_jobs: "Join Our Team",
        footer_contact: "Contact Us",
        footer_tagline: "We Aim To Reach You Anytime & Everywhere<br>Your Satisfaction Is Our Mission",
        lang_toggle_btn: "AR",
        picker_title: "Help Me Choose",
        picker_back: "Back",
        picker_results_title: "Your Perfect Match 🎯",
        picker_results_desc: "Based on your style, we recommend these titles:",
        picker_try_again: "Try Again",
        picker_view: "View",
        // Picker Steps
        step_enjoy: "What do you enjoy the most?",
        step_play: "How do you prefer to play?",
        step_time: "How much time do you usually play?",
        step_diff: "Difficulty preference?",
        // Options
        opt_story: "Story",
        opt_action: "Action",
        opt_comp: "Competitive",
        opt_open: "Open World",
        opt_solo: "Solo",
        opt_online: "Online",
        opt_coop: "Co-op",
        opt_less1: "Less than 1 hr",
        opt_1to3: "1-3 hours",
        opt_3plus: "3+ hours",
        opt_easy: "Easy",
        opt_normal: "Normal",
        opt_hard: "Hard",
        // Auth / Profile
        login_title: 'Login to <span style="color: var(--accent-red)">Red Zone</span>',
        login_email: "Email Address",
        login_email_placeholder: "Enter your email",
        login_pass: "Password",
        login_pass_placeholder: "Enter your password",
        login_btn_submit: "Login",
        login_footer: 'Don\'t have an account? <a href="#" id="to-signup">Sign Up</a>',
        profile_status: "Premium PlayStation Member",
        profile_library: "My Library",
        profile_settings: "Account Settings",
        profile_logout: "Logout",
        // Play Styles
        styles_title: 'Discover Your <span style="color: var(--accent-red)">Play Style</span>',
        styles_desc: "Select a vibe to find your next adventure",
        opt_story_games: "Story Games",
        opt_online_comp: "Online / Competitive",
        opt_chill: "Chill & Relax",
        opt_horror: "Horror",
        // Support
        support_title: "Customer Support",
        support_247_title: '<i class="fas fa-headset"></i> 24/7 Assistance',
        support_247_desc: "Our experts are here anytime to help with technical issues or account recovery.",
        support_fb_title: '<i class="fab fa-facebook-f"></i> Facebook Support',
        support_fb_desc: "For immediate assistance, latest news, and direct chat with our team, visit our official page.",
        support_fb_btn: "Contact on Facebook",
        support_secure_title: '<i class="fas fa-shield-alt"></i> Secure & Safe',
        support_secure_desc: "Advanced encryption protects your data. Contact us for any security concerns.",
        // Product
        product_desc_default: "Experience the thrill of next-gen gaming with this title. Stunning graphics, immersive gameplay, and a story that will captivate you.",
        product_stock: '<i class="fas fa-check-circle"></i> In Stock',
        product_add_cart: "Add to Cart",
        product_cancel: "Cancel",
        // Cart
        cart_title: 'Your Cart (<span id="cart-total-count">0</span>)',
        cart_empty: "Your cart is empty.",
        cart_total: "Total:",
        cart_checkout: "Checkout",
        // Auth
        login_welcome: "Welcome Back",
        login_signin: "Sign In",
        login_no_account: 'Don\'t have an account? <a href="#" id="to-signup">Sign Up</a>',
        signup_title: "Join Red Zone",
        signup_gmail: "Sign up with Gmail",
        signup_fb: "Sign up with Facebook",
        signup_icloud: "Sign up with iCloud",
        signup_create_pass: "Create Password",
        signup_pass_placeholder: "At least 8 characters",
        signup_btn: "Sign Up with Email",
        signup_have_account: 'Already have an account? <a href="#" id="to-login">Sign In</a>',
        // Footer Links
        footer_usage_policy: "Usage & Warranty Policy",
        // Usage Policy Modal
        usage_policy_title: "Usage & Warranty Policy",
        usage_policy_intro: "Please read the following terms carefully before using Red Zone services.",
        usage_policy_s1_title: "1. Account Usage",
        usage_policy_s1_body: "Each account is for personal use only. Sharing account credentials is strictly prohibited and may result in permanent suspension. Red Zone reserves the right to terminate any account found to be in violation of this policy.",
        usage_policy_s2_title: "2. Game Access Types",
        usage_policy_s2_body: "<strong>Primary Account:</strong> Full access – you can use all features including online multiplayer and trophies on your console.<br><strong>Secondary Account:</strong> The game is linked to another account; you can play fully but some online features may require the primary account to be active on the same console.",
        usage_policy_s3_title: "3. Warranty & Refund Policy",
        usage_policy_s3_body: "Red Zone guarantees access to all purchased games for the duration stated at purchase. If you experience any access issues within 7 days of purchase due to our error, we will provide a replacement or full refund. No refunds are issued for games already accessed and played.",
        usage_policy_s4_title: "4. Prohibited Activities",
        usage_policy_s4_body: "You agree not to: resell or transfer account access to third parties, use unauthorized software or cheating tools, attempt to hack or manipulate the Red Zone platform, or use purchased games for commercial streaming without proper licensing.",
        usage_policy_s5_title: "5. Support & Contact",
        usage_policy_s5_body: "For any issues related to your purchase, please contact our support team via Facebook or email within 48 hours. We aim to resolve all issues within 24 hours of being reported.",
        usage_policy_close: "Close",
        // New Footer
        footer_services_title: "Services",
        footer_s1: "PlayStation Plus Subscriptions",
        footer_s2: "Digital Games",
        footer_s3: "Game Accounts",
        footer_s4: "Gift Cards",
        footer_support_title: "Support",
        footer_support_whatsapp: "WhatsApp Support",
        footer_support_technical: "Technical Help",
        footer_support_followup: "Post-delivery follow-up",
        footer_support_warranty: "Warranty Policy",
        footer_sup1: "Refund Policy",
        footer_sup2: "Usage & Warranty Policy",
        footer_sup3: "Legal Notice",
        footer_sup4: "Privacy Policy",
        footer_desc: "An independent platform acting as a mediator in digital gaming services. We facilitate the process of obtaining PlayStation Plus subscriptions, digital games, and accounts through official and certified channels.",
        footer_founded: "Founded in 2024",
        footer_disclaimer: "Red Zone is not officially affiliated with or endorsed by Sony Interactive Entertainment or any hardware/software manufacturer. All mentioned trademarks belong to their respective owners.",
        footer_copyright: "© Red Zone 2026. All Rights Reserved.",
        // Policy Page Full Content
        policy_hero_title: "Usage & <span>Warranty</span> Policy",
        policy_hero_desc: "Welcome! Please read the usage and warranty policy carefully, as completing the purchase means full acceptance of all the following terms.",
        policy_s1_title: "First: Usage Policy",
        policy_s1_l1: "Using the account in any activities that violate PlayStation Network policies or any owner entity is prohibited.",
        policy_s1_l2: "The customer has no right to share the account, resell it, or transfer its ownership without returning to us and obtaining prior approval.",
        policy_s1_l3: "The customer bears full responsibility for maintaining account data and not sharing it with any other party.",
        policy_s1_l4: "Tampering with the account, attempting to break the protection, or using any balance in the account is prohibited. Any violation leads to immediate warranty cancellation.",
        policy_s1_l5: "The account is intended for use on one device only.",
        policy_s1_l6: "Using chat for cursing, insulting, harassment, or speaking offensively or inappropriately is prohibited, as this may lead to a temporary or permanent ban of the account by Sony. The user bears full responsibility, and this does not include any warranty or compensation.",
        policy_s2_title: "Second: Ban Warranty",
        policy_s2_text: "We provide a <strong>one-year</strong> warranty from the delivery date against permanent ban (Permanent Ban) only, according to the following conditions:",
        policy_s2_l1: "If the account is subjected to a permanent ban without a clear violation from the customer, compensation is provided according to the case.",
        policy_s2_comp_title: "Compensation takes one of the following forms:",
        policy_s2_comp_l1: "Providing an alternative game with the same compensation value, or",
        policy_s2_comp_l2: "Providing the same game again if it is within an available offer, or",
        policy_s2_comp_l3: "Providing a contribution not exceeding <strong>50%</strong> of the product value, according to availability.",
        policy_s2_comp_note: "• Compensation is provided only once per account, and there is no right to claim additional compensation after that.",
        policy_s2_not_included: "Warranty does not include:",
        policy_s2_x1: "Temporary ban (3, 7, or 30 days)",
        policy_s2_x2: "Ban resulting from misuse or reports",
        policy_s2_x3: "Violation of PlayStation Network policies",
        policy_s2_x4: "Chat misuse",
        policy_s2_x5: "Account resale or ownership transfer",
        policy_s3_title: "Third: Login & Access Warranty",
        policy_s3_text: "We provide a warranty for the original buyer for up to <strong>3 years</strong> from the delivery date for:",
        policy_s3_card1: "Ability to log in to the account",
        policy_s3_card2: "Continued ability to access the account",
        policy_s3_during: "During the warranty period:",
        policy_s3_l1: "Assistance is provided in case of a problem related to login data or account access.",
        policy_s3_l2: "Technical support is provided only for accounts registered in the name of the customer (original buyer) with us. No assistance may be provided if it appears that the speaker is not the original buyer or that the account was transferred or sold without returning to us.",
        policy_s3_note_title: "Important Clarification:",
        policy_s3_note_body: "We are not responsible for any technical problems resulting from PlayStation Network servers, technical failures, maintenance, or any technical problems outside our control.",
        policy_s3_after_title: "After 24 months:",
        policy_s3_after_l1: "The game remains playable normally.",
        policy_s3_after_l2: "Assistance is provided as much as possible without an obligation for free replacement.",
        policy_s3_after_l3: "This warranty is for the original buyer only and is not transferable to any other party.",
        policy_s4_title: "Fourth: Ownership Transfer & Resell Policy",
        policy_s4_badge: "EGP 119",
        policy_s4_text: "To clear responsibility and transfer the warranty to a new buyer, you must use the <strong>ownership transfer service</strong> provided by our store.",
        policy_s4_rules_title: "Basic Rules:",
        policy_s4_r1: "Reselling is available for free only for the original registered buyer through RED ZONE STORE.",
        policy_s4_r2: "A fee applies to the new buyer worth <span style='background: var(--accent-red); color: #fff; padding: 2px 8px; border-radius: 6px; font-weight: 900; display: inline-block; margin: 0 4px; text-shadow: none;'>119 EGP</span> for the transfer service.",
        policy_s4_after_resell: "After reselling:",
        policy_s4_w_x1: "<i class=\"fas fa-exclamation-triangle\"></i> The Ban Warranty is permanently voided.",
        policy_s4_w_x2: "<i class=\"fas fa-exclamation-triangle\"></i> The new buyer is not entitled to claim any compensation against bans.",
        policy_s4_w_x3: "<i class=\"fas fa-exclamation-triangle\"></i> The new buyer bears full responsibility for the usage.",
        policy_s4_warning: "Warning:",
        policy_s4_w1: "Transferring the account or reselling it without using the official service will result in <strong>immediate and final warranty cancellation</strong> for both the seller and the buyer.",
        policy_hero_badge: "Legal Notice",
        back_to_store: "Back to Store"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_games: "الألعاب",
        nav_plus: "بلس",
        nav_styles: "أنماط اللعب",
        nav_support: "الدعم",
        hero_platform: "ألعاب بلايستيشن الحصرية",
        hero_desc: "جرب الجيل القادم من الألعاب. عناوين حصرية، معدات متميزة، وأفضل العروض على بلايستيشن 5.",
        hero_btn: "تسوق الآن",
        games_title: '<i class="fas fa-gamepad"></i> أحدث <span style="color: var(--accent-red)">الإصدارات</span>',
        filter_all: "الكل",
        filter_action: "أكشن",
        filter_sports: "رياضة",
        smart_picker: "ساعدني في اختيار لعبة 🎮",
        search_placeholder: "ابحث عن الألعاب...",
        plus_tagline: "ارتقِ بتجربة اللعب الخاصة بك مع الدخول المميز.",
        plus_btn: "انضم الآن",
        footer_jobs: "انضم لفريقنا",
        footer_contact: "اتصل بنا",
        footer_tagline: "نهدف للوصول إليك في أي وقت وفي كل مكان<br>رضاكم هو مهمتنا",
        lang_toggle_btn: "EN",
        picker_title: "ساعدني في الاختيار",
        picker_back: "رجوع",
        picker_results_title: "اختيارك المثالي 🎯",
        picker_results_desc: "بناءً على أسلوبك، ننصحك بهذه الألعاب:",
        picker_try_again: "حاول مرة أخرى",
        picker_view: "عرض",
        // Picker Steps
        step_enjoy: "ما الذي تستمتع به أكثر؟",
        step_play: "كيف تفضل اللعب؟",
        step_time: "كم من الوقت تقضي في اللعب عادةً؟",
        step_diff: "مستوى الصعوبة المفضل؟",
        // Options
        opt_story: "قصة",
        opt_action: "أكشن",
        opt_comp: "تنافسي",
        opt_open: "عالم مفتوح",
        opt_solo: "فردي",
        opt_online: "أونلاين",
        opt_coop: "تعاوني",
        opt_less1: "أقل من ساعة",
        opt_1to3: "1-3 ساعات",
        opt_3plus: "أكثر من 3 ساعات",
        opt_easy: "سهل",
        opt_normal: "متوسط",
        opt_hard: "صعب",
        // Auth / Profile
        login_title: 'تسجيل الدخول إلى <span style="color: var(--accent-red)">ريد زون</span>',
        login_email: "البريد الإلكتروني",
        login_email_placeholder: "أدخل بريدك الإلكتروني",
        login_pass: "كلمة المرور",
        login_pass_placeholder: "أدخل كلمة المرور",
        login_btn_submit: "دخول",
        login_footer: 'ليس لديك حساب؟ <a href="#" id="to-signup">اشترك الآن</a>',
        profile_status: "عضو بلايستيشن متميز",
        profile_library: "مكتبتي",
        profile_settings: "إعدادات الحساب",
        profile_logout: "خروج",
        // Play Styles
        styles_title: 'اكتشف <span style="color: var(--accent-red)">أسلوب لعبك</span>',
        styles_desc: "اختر أسلوباً لتجد مغامرتك القادمة",
        opt_story_games: "ألعاب القصة",
        opt_online_comp: "أونلاين / تنافسي",
        opt_coop: "تعاوني",
        opt_chill: "استرخاء وهدوء",
        opt_horror: "رعب",
        // Support
        support_title: "دعم العملاء",
        support_247_title: '<i class="fas fa-headset"></i> مساعدة 24/7',
        support_247_desc: "خبراؤنا هنا في أي وقت للمساعدة في المشاكل التقنية أو استعادة الحساب.",
        support_fb_title: '<i class="fab fa-facebook-f"></i> دعم فيسبوك',
        support_fb_desc: "للمساعدة الفورية، وآخر الأخبار، والدردشة المباشرة مع فريقنا، قم بزيارة صفحتنا الرسمية.",
        support_fb_btn: "تواصل عبر فيسبوك",
        support_secure_title: '<i class="fas fa-shield-alt"></i> آمن ومحمي',
        support_secure_desc: "تشفير متقدم يحمي بياناتك. اتصل بنا لأي استفسارات تتعلق بالأمان.",
        // Product
        product_desc_default: "استمتع بإثارة الجيل القادم من الألعاب مع هذا العنوان. رسومات مذهلة، وأسلوب لعب غامر، وقصة ستأسرك.",
        product_stock: '<i class="fas fa-check-circle"></i> متوفر',
        product_add_cart: "أضف إلى السلة",
        product_cancel: "إلغاء",
        // Cart
        cart_title: 'سلة التسوق (<span id="cart-total-count">0</span>)',
        cart_empty: "السلة فارغة.",
        cart_total: "الإجمالي:",
        cart_checkout: "إتمام الشراء",
        // Auth
        login_welcome: "أهلاً بعودتك",
        login_email: "البريد الإلكتروني",
        login_email_placeholder: "أدخل بريدك الإلكتروني",
        login_pass: "كلمة المرور",
        login_pass_placeholder: "أدخل كلمة المرور",
        login_signin: "دخول",
        login_no_account: 'ليس لديك حساب؟ <a href="#" id="to-signup">اشترك الآن</a>',
        signup_title: "انضم إلى ريد زون",
        signup_gmail: "اشترك بـ Gmail",
        signup_fb: "اشترك بـ Facebook",
        signup_icloud: "اشترك بـ iCloud",
        signup_create_pass: "إنشاء كلمة مرور",
        signup_pass_placeholder: "8 أحرف على الأقل",
        signup_btn: "اشترك بالبريد الإلكتروني",
        signup_have_account: 'لديك حساب بالفعل؟ <a href="#" id="to-login">تسجيل الدخول</a>',
        // Footer Links
        footer_usage_policy: "سياسة الاستخدام والضمان",
        // Policy Page Full Content
        policy_hero_title: "سياسة الاستخدام <span>والضمان</span>",
        policy_hero_desc: "مرحباً بك، يرجى قراءة سياسة الاستخدام والضمان بعناية، حيث إن إتمام عملية الشراء يعني القبول الكامل بجميع الشروط التالية.",
        policy_s1_title: "أولاً: سياسة الاستخدام",
        policy_s1_l1: "يُمنع استخدام الحساب في أي أنشطة مخالفة لسياسات PlayStation Network أو أي جهة مالكة.",
        policy_s1_l2: "لا يحق للعميل مشاركة الحساب أو إعادة بيعه أو نقل ملكيته دون الرجوع إلينا والحصول على موافقة مسبقة.",
        policy_s1_l3: "يتحمل العميل المسؤولية الكاملة عن الحفاظ على بيانات الحساب وعدم مشاركتها مع أي طرف آخر.",
        policy_s1_l4: "يُمنع التلاعب بالحساب أو محاولة كسر الحماية أو استخدام أي رصيد موجود بالحساب، وأي مخالفة تؤدي إلى إلغاء الضمان فوراً.",
        policy_s1_l5: "الحساب مخصص للاستخدام على جهاز واحد فقط.",
        policy_s1_l6: "يُمنع استخدام الشات في السب أو الإهانة أو المضايقة أو التحدث بشكل مسيء أو غير لائق، حيث إن ذلك قد يؤدي إلى حظر مؤقت أو دائم للحساب من قبل Sony، ويتحمل المستخدم المسؤولية الكاملة، ولا يشمل ذلك أي ضمان أو تعويض.",
        policy_s2_title: "ثانياً: ضمان الحظر (Ban Warranty)",
        policy_s2_text: "نقدم ضمان لمدة <strong>سنة واحدة</strong> من تاريخ التسليم ضد الحظر الدائم (Permanent Ban) فقط وفق الشروط التالية:",
        policy_s2_l1: "في حال تعرض الحساب إلى حظر دائم بدون وجود مخالفة واضحة من العميل، يتم التعويض حسب الحالة.",
        policy_s2_comp_title: "يكون التعويض على أحد الأشكال التالية:",
        policy_s2_comp_l1: "توفير لعبة بديلة بنفس قيمة التعويض، أو",
        policy_s2_comp_l2: "توفير نفس اللعبة مرة أخرى في حال كانت ضمن عرض متاح، أو",
        policy_s2_comp_l3: "تقديم مساهمة بنسبة لا تتجاوز <strong>50%</strong> من قيمة المنتج، وذلك حسب التوفر.",
        policy_s2_comp_note: "• يتم التعويض لمرة واحدة فقط لكل حساب، ولا يحق المطالبة بتعويض إضافي بعد ذلك.",
        policy_s2_not_included: "لا يشمل الضمان:",
        policy_s2_x1: "الحظر المؤقت (3 أو 7 أو 30 يوم)",
        policy_s2_x2: "الحظر الناتج عن سوء الاستخدام أو البلاغات",
        policy_s2_x3: "مخالفة سياسات PlayStation Network",
        policy_s2_x4: "إساءة استخدام الشات",
        policy_s2_x5: "إعادة بيع الحساب أو نقل الملكية",
        policy_s3_title: "ثالثاً: ضمان التسجيل والدخول",
        policy_s3_text: "نقدم ضمان للشاري الأصلي لمدة تصل إلى <strong>3 سنوات</strong> من تاريخ التسليم على:",
        policy_s3_card1: "إمكانية تسجيل الدخول للحساب",
        policy_s3_card2: "استمرار إمكانية الوصول للحساب",
        policy_s3_during: "خلال مدة الضمان:",
        policy_s3_l1: "يتم تقديم المساعدة في حال وجود مشكلة تتعلق ببيانات تسجيل الدخول أو الوصول للحساب.",
        policy_s3_l2: "يتم تقديم الدعم الفني فقط للحسابات المسجلة باسم العميل (الشاري الأصلي) لدينا، ولا يجوز تقديم أي مساعدة في حال تبين أن المتحدث ليس الشاري الأصلي أو أن الحساب تم نقله أو بيعه دون الرجوع إلينا.",
        policy_s3_note_title: "توضيح هام:",
        policy_s3_note_body: "لسنا مسؤولين عن أي مشاكل تقنية ناتجة عن خوادم PlayStation Network أو الأعطال الفنية أو الصيانة أو أي مشاكل تقنية خارج نطاق سيطرتنا.",
        policy_s3_after_title: "بعد انتهاء مدة 24 شهر:",
        policy_s3_after_l1: "تظل اللعبة قابلة للتشغيل بشكل طبيعي.",
        policy_s3_after_l2: "يتم تقديم المساعدة قدر الإمكان دون التزام باستبدال مجاني.",
        policy_s3_after_l3: "هذا الضمان مخصص للشاري الأصلي فقط ولا ينتقل لأي طرف آخر.",
        policy_s4_title: "رابعاً: سياسة نقل الملكية وإعادة البيع",
        policy_s4_badge: "119 ج.م",
        policy_s4_text: "لإخلاء المسؤولية ونقل الضمان لمشتري جديد، يجب استخدام <strong>خدمة نقل الملكية</strong> المقدمة من متجرنا.",
        policy_s4_rules_title: "القواعد الأساسية:",
        policy_s4_r1: "إعادة البيع متاحة مجانًا فقط للشاري الأصلي المسجل لدينا من خلال RED ZONE STORE.",
        policy_s4_r2: "يتم فرض رسوم على المشتري الجديد بقيمة <span style='background: var(--accent-red); color: #fff; padding: 2px 8px; border-radius: 6px; font-weight: 900; display: inline-block; margin: 0 4px; text-shadow: none;'>119 جنيه مصري</span> مقابل نقل الخدمة.",
        policy_s4_after_resell: "بعد إعادة البيع:",
        policy_s4_w_x1: "<i class=\"fas fa-exclamation-triangle\"></i> يسقط ضمان الحظر (Ban Warranty) نهائيًا.",
        policy_s4_w_x2: "<i class=\"fas fa-exclamation-triangle\"></i> لا يحق للمشتري الجديد المطالبة بأي تعويض ضد الحظر.",
        policy_s4_w_x3: "<i class=\"fas fa-exclamation-triangle\"></i> يتحمل المشتري الجديد المسؤولية الكاملة عن الاستخدام.",
        policy_s4_warning: "تنويـه:",
        policy_s4_w1: "نقل الحساب أو إعادة بيعه دون استخدام الخدمة الرسمية يؤدي إلى <strong>إلغاء الضمان فوراً وبشكل نهائي</strong> للبائع والمشتري.",
        // Usage Policy Modal
        usage_policy_title: "سياسة الاستخدام والضمان",
        usage_policy_intro: "يرجى قراءة الشروط التالية بعناية قبل استخدام خدمات ريد زون.",
        usage_policy_s1_title: "1. استخدام الحساب",
        usage_policy_s1_body: "كل حساب مخصص للاستخدام الشخصي فقط. يُحظر مشاركة بيانات الدخول مع الآخرين وقد يؤدي ذلك إلى إيقاف الحساب نهائياً. تحتفظ ريد زون بالحق في إنهاء أي حساب يُخالف هذه السياسة.",
        usage_policy_s2_title: "2. أنواع الوصول للألعاب",
        usage_policy_s2_body: "<strong>الحساب الأساسي (Primary):</strong> وصول كامل – يمكنك استخدام جميع الميزات بما في ذلك اللعب أونلاين والكؤوس على جهازك.<br><strong>الحساب الثانوي (Secondary):</strong> اللعبة مرتبطة بحساب آخر؛ يمكنك اللعب بشكل كامل لكن بعض ميزات الأونلاين قد تتطلب أن يكون الحساب الأساسي نشطاً على نفس الجهاز.",
        usage_policy_s3_title: "3. سياسة الضمان والاسترداد",
        usage_policy_s3_body: "تضمن ريد زون الوصول لجميع الألعاب المُشتراة طوال المدة المُحددة عند الشراء. إذا واجهت أي مشكلة في الوصول خلال 7 أيام من الشراء بسبب خطأ من جانبنا، سنوفر استبدالاً أو استرداداً كاملاً. لا يُعاد استرداد الأموال للألعاب التي تم الوصول إليها والتي تم اللعب بها.",
        usage_policy_s4_title: "4. الأنشطة المحظورة",
        usage_policy_s4_body: "توافق على عدم: إعادة بيع أو نقل الوصول للحساب لأطراف ثالثة، استخدام برامج غير مصرح بها أو أدوات الغش، محاولة اختراق أو التلاعب بمنصة ريد زون، أو استخدام الألعاب المُشتراة للبث التجاري دون ترخيص مناسب.",
        usage_policy_s5_title: "5. الدعم والتواصل",
        usage_policy_s5_body: "لأي مشكلة تتعلق بعملية الشراء، يرجى التواصل مع فريق الدعم عبر فيسبوك أو البريد الإلكتروني خلال 48 ساعة. نهدف لحل جميع المشاكل خلال 24 ساعة من الإبلاغ عنها.",
        usage_policy_close: "إغلاق",
        // New Footer
        footer_services_title: "الخدمات",
        footer_s1: "اشتراكات PlayStation Plus",
        footer_s2: "الألعاب الرقمية",
        footer_s3: "حسابات الألعاب",
        footer_s4: "بطاقات الهدايا",
        footer_support_title: "الدعم",
        footer_support_whatsapp: "دعم واتساب",
        footer_support_technical: "المساعدة التقنية",
        footer_support_followup: "المتابعة بعد التوصيل",
        footer_support_warranty: "سياسة الضمان",
        footer_sup1: "سياسة الاسترداد",
        footer_sup2: "سياسة الاستخدام والضمان",
        footer_sup3: "الإشعار القانوني",
        footer_sup4: "سياسة الخصوصية",
        footer_desc: "منصة مستقلة تعمل كوسيط في مجال الخدمات الرقمية للألعاب، ونقوم بتسهيل عملية الحصول على اشتراكات PlayStation Plus، الألعاب الرقمية، والحسابات، من خلال قنوات شراء وشحن رسمية ومعتمدة.",
        footer_founded: "تأسست في 2024",
        footer_disclaimer: "Red Zone لا تمثل أو ترتبط رسميًا بشركة Sony Interactive Entertainment أو أي جهة مصنعة للأجهزة أو الألعاب. جميع العلامات التجارية المذكورة هي ملك لأصحابها الشرعيين.",
        footer_copyright: "© Red Zone 2026. جميع الحقوق محفوظة.",
        policy_hero_badge: "إشعار قانوني"
    }
};

let currentLang = localStorage.getItem('site_lang') || 'en';

window.setLanguage = function (lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName.toLowerCase() === 'input' && el.hasAttribute('placeholder')) {
                el.setAttribute('placeholder', translations[lang][key]);
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Handle placeholder-only elements (data-i18n-placeholder)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    const langBtns = document.querySelectorAll('.lang-toggle');
    langBtns.forEach(btn => {
        btn.textContent = translations[lang].lang_toggle_btn;
    });

    // Translate dynamic game prices or text if needed (Basic refresh)
    const gamesGrid = document.getElementById('games-grid');
    if (gamesGrid && typeof renderGames === 'function' && typeof games !== 'undefined') {
        const activeFilter = document.querySelector('.active-filter')?.getAttribute('data-category') || 'All';
        if (typeof filterNav === 'function') {
            filterNav(activeFilter);
        } else {
            renderGames(games);
        }
    }

    // Also sync policy if it's currently visible
    if (document.getElementById('policy-page')?.style.display === 'block') {
        if (typeof syncPolicyUI === 'function') syncPolicyUI();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.showToast = function(message, isError = false) {
        let toast = document.getElementById('toast');
        let toastMessage = null;
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            toast.id = 'toast';
            toast.innerHTML = `<i class="fas fa-info-circle"></i><span id="toastMessage"></span>`;
            document.body.appendChild(toast);
        }
        toastMessage = document.getElementById('toastMessage');
        const icon = toast.querySelector('i');
        if (isError) {
            toast.classList.add('error');
            if(icon) icon.className = 'fas fa-exclamation-circle';
        } else {
            toast.classList.remove('error');
            if(icon) icon.className = 'fas fa-check-circle';
        }
        toastMessage.textContent = message;
        toast.classList.add('show');
        setTimeout(() => { toast.classList.remove('show'); }, 3000);
    };

    // Initialize Language
    setLanguage(currentLang);

    // Language Toggle Button Event
    const langBtns = document.querySelectorAll('.lang-toggle');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    });


    // ---- POLICY PAGE ----
    // ---- POLICY MODAL ----
    window.openPolicyPage = function () {
        const modal = document.getElementById('policy-modal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closePolicyPage = function () {
        const modal = document.getElementById('policy-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    };

    // Global Policy Link Listener
    document.addEventListener('click', (e) => {
        if (e.target && (e.target.id === 'usage-policy-link' || e.target.classList.contains('policy-trigger') || e.target.closest('.policy-trigger'))) {
            e.preventDefault();
            openPolicyPage();
        }
    });

    // Determine API URL based on environment
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname === '';

    // TODO: Replace 'redzone-backend.onrender.com' with your actual Render URL after deployment
    const PRODUCTION_API_URL = 'https://redzone-backend.onrender.com/api';
    const LOCAL_API_URL = 'http://127.0.0.1:5001/api';

    // Auto-detect environment: Use production URL if not on localhost or running from a file
    const API_URL = isDevelopment ? LOCAL_API_URL : PRODUCTION_API_URL;

    const api = {
        async get(endpoint) {
            const token = localStorage.getItem('token');
            try {
                const res = await fetch(`${API_URL}${endpoint}`, {
                    headers: {
                        'Authorization': token ? `Bearer ${token}` : ''
                    }
                });
                if (res.status === 401) {
                    logout();
                    showToast("Session expired. Please log in again.", true);
                    openModal(loginModal);
                    throw new Error('Unauthorized');
                }
                if (!res.ok) throw new Error(`API Error: ${res.status}`);
                return res.json();
            } catch (err) {
                showToast("GET Network Error: " + err.message + " - URL: " + API_URL + endpoint, true);
                throw err;
            }
        },
        async post(endpoint, body) {
            const token = localStorage.getItem('token');
            try {
                const res = await fetch(`${API_URL}${endpoint}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token ? `Bearer ${token}` : ''
                    },
                    body: JSON.stringify(body)
                });

                let data;
                try {
                    data = await res.json();
                } catch (e) {
                    throw new Error(`Invalid JSON response: ${res.status}`);
                }

                if (res.status === 401) {
                    logout();
                    showToast("Session expired. Please log in again.", true);
                    openModal(loginModal);
                    throw new Error('Unauthorized');
                }
                if (!res.ok) {
                    throw new Error(data.message || `API Error: ${res.status}`);
                }
                return data;
            } catch (err) {
                // VERY EXPLICIT ALERT
                showToast("POST Failed! Error: " + err.message + "\nURL: " + API_URL + endpoint + "\nPlease check if server is running on 5001.", true);
                console.error("Fetch full error:", err);
                throw err;
            }
        },
        async put(endpoint, body) {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_URL}${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token ? `Bearer ${token}` : ''
                },
                body: JSON.stringify(body)
            });
            if (res.status === 401) {
                logout();
                showToast("Session expired. Please log in again.", true);
                openModal(loginModal);
                throw new Error('Unauthorized');
            }
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || `API Error: ${res.status}`);
            }
            return res.json();
        },
        async delete(endpoint) {
            const token = localStorage.getItem('token');
            const res = await fetch(`${API_URL}${endpoint}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': token ? `Bearer ${token}` : ''
                }
            });
            if (res.status === 401) {
                logout();
                showToast("Session expired. Please log in again.", true);
                openModal(loginModal);
                throw new Error('Unauthorized');
            }
            if (!res.ok) throw new Error(`API Error: ${res.status}`);
            return res.json();
        }
    };

    /* ----------------------------------------------------
       GAME DATA
       ---------------------------------------------------- */
    let games = [
        // --- ACTION GAMES ---
        {
            id: 1,
            title: "Black Myth: Wukong",
            price: 0,
            image: "assets/images/wukong.jpg",
            category: "Action",
            platform: "PS5",
            rating: 5,
            styles: ["Story"],
            desc: "Embark on an epic journey as the Destined One. Confront your destiny in this Action RPG rooted in Chinese mythology.",
            prices: [
                { label: "Primary", value: 1699 },
                { label: "Secondary", value: 1199 },
                { label: "Full Account", value: 2699 }
            ],
            tags: ["Action", "Story"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Hard"
        },
        {
            id: 2,
            title: "Call of Duty: Black Ops 6",
            price: 0,
            image: "assets/images/bo6.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 4,
            styles: ["Online", "Co-op", "Story"],
            desc: "Forced to go rogue. Hunted from within. This is Call of Duty: Black Ops 6. A signature Black Ops cinematic single-player Campaign, a best-in-class Multiplayer experience, and the epic return of Round-Based Zombies.",
            prices: [
                { label: "Primary PS5", value: 1199 },
                { label: "Secondary", value: 599 },
                { label: "Primary PS4", value: 549 }
            ],
            tags: ["Action", "Competitive", "Story"],
            playStyle: ["Solo", "Online", "Co-op"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 3,
            title: "God of War Ragnarok",
            price: 0,
            image: "assets/images/gow_ragnarok.jpg",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Story"],
            desc: "Fimbulwinter is here. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Aesir forces prepare for a prophesied battle that will end the world.",
            prices: [
                { label: "Primary PS5", value: 699 },
                { label: "Secondary", value: 500 },
                { label: "Primary PS4", value: 549 }
            ],
            tags: ["Action", "Story"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 4,
            title: "Red Dead Redemption 2",
            price: 0,
            image: "assets/images/rdr2.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Story"],
            desc: "America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed.",
            prices: [
                { label: "Primary PS5", value: 399 },
                { label: "Secondary", value: 249 },
                { label: "Primary PS4", value: 299 }
            ],
            tags: ["Story", "Open World"],
            playStyle: ["Solo", "Online"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 5,
            title: "ARC Raiders",
            price: 0,
            image: "assets/images/arc_raiders.jpg",
            category: "Action",
            platform: "PS5",
            rating: 4,
            styles: ["Online", "Co-op"],
            desc: "A free-to-play, third-person, PvPvE extraction shooter set in a lethal future earth. Resist ARC.",
            prices: [
                { label: "Primary PS5", value: 1099 },
                { label: "Secondary PS5", value: 589 }
            ],
            tags: ["Action", "Competitive"],
            playStyle: ["Online", "Co-op"],
            playTime: "1-3",
            difficulty: "Hard"
        },
        {
            id: 6,
            title: "Astro Bot",
            price: 0,
            image: "assets/images/astro_bot.png",
            category: "Action",
            platform: "PS5",
            rating: 5,
            styles: ["Story", "Chill"],
            desc: "A super-sized adventure! Explore 50 planets, find lost bots, and use new power-ups in this celebration of PlayStation history.",
            prices: [
                { label: "Primary", value: 1499 },
                { label: "Secondary", value: 999 }
            ],
            tags: ["Action", "Story"],
            playStyle: ["Solo"],
            playTime: "1-3",
            difficulty: "Easy"
        },
        {
            id: 7,
            title: "Silent Hill 2",
            price: 0,
            image: "assets/images/silent_hill2.png",
            category: "Action",
            platform: "PS5",
            rating: 5,
            styles: ["Story", "Horror"],
            desc: "In his restless dreams, he sees that town... Experience the psychological horror masterpiece, rebuilt for PS5.",
            prices: [
                { label: "Primary PS5", value: 1850 },
                { label: "Secondary PS5", value: 1450 }
            ],
            tags: ["Story"],
            playStyle: ["Solo"],
            playTime: "1-3",
            difficulty: "Normal"
        },
        {
            id: 8,
            title: "Final Fantasy VII Rebirth",
            price: 0,
            image: "assets/images/final_fantasy.png",
            category: "Action",
            platform: "PS5",
            rating: 5,
            styles: ["Story"],
            desc: "The Unknown Journey Continues. Cloud and his comrades escape Midgar and venture into the wide world.",
            prices: [
                { label: "Primary PS5", value: 2000 },
                { label: "Secondary", value: 1500 }
            ],
            tags: ["Story", "Open World"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 9,
            title: "Ghost of Tsushima (Arabic Version)",
            price: 0,
            image: "assets/images/ghost_of_tsushima.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Story", "Adventure"],
            desc: "In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet.",
            prices: [
                { label: "Primary PS5", value: 599 },
                { label: "Primary PS4", value: 449 },
                { label: "Secondary", value: 400 }
            ],
            tags: ["Action", "Story", "Open World"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 10,
            title: "Spider-Man 2",
            price: 0,
            image: "assets/images/spiderman2.png",
            category: "Action",
            platform: "PS5",
            rating: 5,
            styles: ["Story"],
            desc: "Swing through Marvel's New York as both Peter Parker and Miles Morales. Experience the epic power of the Symbiote in an all-new adventure.",
            prices: [
                { label: "Primary PS5", value: 1199 },
                { label: "Secondary", value: 799 }
            ],
            tags: ["Action", "Open World", "Story"],
            playStyle: ["Solo"],
            playTime: "1-3",
            difficulty: "Normal"
        },

        // --- SPORTS GAMES ---
        {
            id: 11,
            title: "FC 26",
            price: 0,
            image: "assets/images/fc26.png",
            category: "Sports",
            platform: "PS5/PS4",
            rating: 4,
            styles: ["Online", "Co-op"],
            desc: "The next evolution of the World's Game. Featuring the most advanced gameplay innovations and authentic football experience.",
            prices: [
                { label: "Primary PS5", value: 1100 },
                { label: "Primary PS4", value: 600 },
                { label: "Secondary", value: 500 }
            ],
            tags: ["Competitive"],
            playStyle: ["Solo", "Online", "Co-op"],
            playTime: "Less than 1",
            difficulty: "Normal"
        },
        {
            id: 12,
            title: "NBA 2K25",
            price: 0,
            image: "assets/images/nba2k25.jpg",
            category: "Sports",
            platform: "PS5/PS4",
            rating: 4,
            styles: ["Online", "Co-op"],
            desc: "Ball over everything. Experience the next evolution of gameplay with ProPLAY technology delivering authentic NBA action.",
            prices: [
                { label: "Primary PS5", value: 699 },
                { label: "Primary PS4", value: 399 },
                { label: "Secondary", value: 499 }
            ],
            tags: ["Competitive"],
            playStyle: ["Solo", "Online", "Co-op"],
            playTime: "Less than 1",
            difficulty: "Normal"
        },
        {
            id: 13,
            title: "WWE 2K25",
            price: 0,
            image: "assets/images/wwe2k25.png",
            category: "Sports",
            platform: "PS5",
            rating: 4,
            styles: ["Online", "Co-op"],
            desc: "Finish Your Story. Experience a gripping retelling of WrestleMania's greatest moments in 2K Showcase of the Immortals.",
            prices: [
                { label: "Primary PS5", value: 849 },
                { label: "Primary PS4", value: 549 },
                { label: "Secondary", value: 549 }
            ],
            tags: ["Competitive"],
            playStyle: ["Solo", "Online", "Co-op"],
            playTime: "Less than 1",
            difficulty: "Normal"
        },
        {
            id: 14,
            title: "UFC 5",
            price: 0,
            image: "assets/images/ufc5.png",
            category: "Sports",
            platform: "PS5",
            rating: 4,
            styles: ["Online"],
            desc: "As real as it gets. Powered by Frostbite, featuring the new Real Impact System for realistic damage.",
            prices: [
                { label: "Primary PS5", value: 599 },
                { label: "Secondary PS5", value: 379 }
            ],
            tags: ["Competitive"],
            playStyle: ["Solo", "Online"],
            playTime: "Less than 1",
            difficulty: "Normal"
        },
        {
            id: 15,
            title: "Battlefield 6",
            price: 0,
            image: "assets/images/battlefield_6.png",
            category: "Action",
            platform: "PS5",
            rating: 5,
            styles: ["Online", "Co-op", "Story"],
            desc: "The next generation of all-out warfare. Experience massive battles, dynamic destruction, and the return of epic combined arms combat.",
            prices: [
                { label: "Primary PS5", value: 1599 },
                { label: "Secondary", value: 899 },
                { label: "Full Account", value: 2299 }
            ],
            tags: ["Action", "Competitive"],
            playStyle: ["Solo", "Online", "Co-op"],
            playTime: "3+",
            difficulty: "Hard"
        },
        {
            id: 16,
            title: "F1 25",
            price: 0,
            image: "assets/images/f125.png",
            category: "Sports",
            platform: "PS5",
            desc: "Drive the latest 2025 cars from the official F1 lineup and experience the next generation of racing excellence.",
            prices: [
                { label: "Primary PS5", value: 1699 },
                { label: "Secondary PS5", value: 1099 }
            ],
            tags: ["Competitive"],
            playStyle: ["Solo", "Online", "Co-op"],
            playTime: "Less than 1",
            difficulty: "Hard"
        },
        {
            id: 17,
            title: "Gran Turismo 7",
            price: 0,
            image: "assets/images/gran_turismo_7.png",
            category: "Sports",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Simulation", "Online"],
            desc: "The Real Driving Simulator. Find your line. Whether you're a racer, connector, tuner, livery designer, or photographer.",
            prices: [
                { label: "Primary PS5", value: 899 },
                { label: "Secondary PS5", value: 649 },
                { label: "Primary PS4", value: 599 },
                { label: "Secondary PS4", value: 450 }
            ],
            tags: ["Competitive"],
            playStyle: ["Solo", "Online"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 18,
            title: "Assassin's Creed Mirage",
            price: 0,
            image: "assets/images/ac_mirage.jpg",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Story", "Adventure"],
            desc: "Experience the story of Basim, a cunning street thief with nightmarish visions, seeking answers and justice as he navigates the bustling streets of ninth-century Baghdad.",
            prices: [
                { label: "Primary PS5", value: 599 },
                { label: "Primary PS4", value: 399 },
                { label: "Secondary", value: 379 }
            ],
            tags: ["Action", "Story"],
            playStyle: ["Solo"],
            playTime: "1-3",
            difficulty: "Normal"
        },
        {
            id: 19,
            title: "Elden Ring",
            price: 0,
            image: "assets/images/elden_ring.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Story", "Adventure"],
            desc: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
            prices: [
                { label: "Primary PS5", value: 990 },
                { label: "Primary PS4", value: 800 },
                { label: "Secondary", value: 690 }
            ],
            tags: ["Action", "Story", "Open World"],
            playStyle: ["Solo", "Online"],
            playTime: "3+",
            difficulty: "Hard"
        },
        {
            id: 20,
            title: "Elden Ring: Shadow of the Erdtree",
            price: 0,
            image: "assets/images/elden_ring_dlc.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Story", "Adventure"],
            desc: "Includes the base game and the 'Shadow of the Erdtree' expansion. Venture once more into the shadow of the Erdtree to discover new secrets.",
            prices: [
                { label: "Primary PS5 with DLC", value: 1499 },
                { label: "Primary PS4 with DLC", value: 1100 },
                { label: "Secondary with DLC", value: 1000 }
            ],
            tags: ["Action", "Story", "Open World"],
            playStyle: ["Solo", "Online"],
            playTime: "3+",
            difficulty: "Hard"
        },
        {
            id: 24,
            title: "Call of Duty: Modern Warfare 3",
            price: 0,
            image: "assets/images/mw3.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Online", "Co-op", "Story"],
            desc: "In the direct sequel to the record-breaking Call of Duty: Modern Warfare II, Captain Price and Task Force 141 face off against the ultimate threat.",
            prices: [
                { label: "Primary PS5", value: 875 },
                { label: "Primary PS4", value: 600 },
                { label: "Secondary", value: 600 }
            ],
            tags: ["Action", "Competitive", "FPS"],
            playStyle: ["Solo", "Online", "Co-op"],
            playTime: "3+",
            difficulty: "Hard"
        },
        {
            id: 25,
            title: "The Crew Motorfest",
            price: 0,
            image: "assets/images/crew_motorfest.jpg.jpg",
            category: "Sports",
            platform: "PS5/PS4",
            rating: 4,
            styles: ["Online", "Co-op", "Racing"],
            desc: "Welcome to Motorfest! Join the one-of-a-kind festival and enjoy the best experiences car culture has to offer in a beautiful Hawaiian open world.",
            prices: [
                { label: "Primary PS5", value: 599 },
                { label: "Primary PS4", value: 399 },
                { label: "Secondary", value: 349 }
            ],
            tags: ["Sports", "Competitive", "Racing"],
            playStyle: ["Solo", "Online", "Co-op"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 26,
            title: "Crash Bandicoot™ Bundle (3 Games)",
            price: 0,
            image: "assets/images/crash_bundle.png.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Story", "Competitive", "Co-op"],
            desc: "The ultimate Crash Bandicoot collection! Includes three complete adventures: \n• Crash Bandicoot™ N. Sane Trilogy \n• Crash Team Racing Nitro-Fueled \n• Crash Bandicoot™ 4: It’s About Time",
            prices: [
                { label: "Primary PS5", value: 599 },
                { label: "Primary PS4", value: 399 },
                { label: "Secondary", value: 449 }
            ],
            tags: ["Action", "Classic", "Bundle"],
            playStyle: ["Solo", "Online", "Co-op"],
            playTime: "100+",
            difficulty: "Hard"
        },
        {
            id: 27,
            title: "Forza Horizon 5",
            price: 0,
            image: "assets/images/forza5.png.png",
            category: "Sports",
            platform: "PS5",
            rating: 5,
            styles: ["Online", "Racing", "Open World"],
            desc: "Your ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.",
            prices: [
                { label: "Primary PS5", value: 1099 },
                { label: "Secondary PS5", value: 749 },
                { label: "Full Account", value: 2900 }
            ],
            tags: ["Sports", "Racing", "Open World"],
            playStyle: ["Solo", "Online"],
            playTime: "50+",
            difficulty: "Normal"
        },

        {
            id: 21,
            title: "Call of Duty: Black Ops 7",
            price: 0,
            image: "assets/images/cod_bo7.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Online", "Co-op", "Story"],
            desc: "Cross the lines. Black Ops 7 delivers the most cinematic and gritty experience yet, with a gripping campaign, next-gen multiplayer, and the most ambitious Zombies mode to date.",
            prices: [
                { label: "Primary PS5", value: 1999 },
                { label: "Primary PS4", value: 699 },
                { label: "Secondary", value: 1199 }
            ],
            tags: ["Action", "Competitive", "FPS"],
            playStyle: ["Solo", "Online", "Co-op"],
            playTime: "3+",
            difficulty: "Hard"
        },
        {
            id: 22,
            title: "WWE 2K24",
            price: 0,
            image: "assets/images/wwe2k24.png",
            category: "Sports",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Sports", "Competitive"],
            desc: "Finish Your Story. Experience a gripping retelling of WrestleMania's greatest moments in 2K Showcase of the Immortals.",
            prices: [
                { label: "Primary PS5", value: 599 },
                { label: "Primary PS4", value: 499 },
                { label: "Secondary", value: 399 }
            ],
            tags: ["Sports", "Competitive"],
            playStyle: ["Solo", "Online", "Co-op"],
            playTime: "Less than 1",
            difficulty: "Normal"
        },
        {
            id: 23,
            title: "Hogwarts Legacy",
            price: 0,
            image: "assets/images/hogwarts_legacy.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Story", "Adventure"],
            desc: "Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart.",
            prices: [
                { label: "Primary PS5", value: 649 },
                { label: "Primary PS4", value: 450 },
                { label: "Secondary", value: 389 }
            ],
            tags: ["Action", "Story", "Open World"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 28,
            title: "Ghost of Yōtei",
            price: 0,
            image: "assets/images/ghost_of_yotei.png.png",
            category: "Action",
            platform: "PS5",
            rating: 5,
            styles: ["Story", "Adventure"],
            desc: "A new Ghost story awaits. In 1603, Atsu sets out on a journey in the lands surrounding Mount Yōtei.",
            prices: [
                { label: "Primary PS5", value: 2149 },
                { label: "Secondary PS5", value: 1399 },
                { label: "Full Account", value: 3299 }
            ],
            tags: ["Action", "Story", "Open World"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Hard"
        },
        {
            id: 29,
            title: "Resident Evil 4",
            price: 0,
            image: "assets/images/resident_evil_4.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Story", "Horror"],
            desc: "Experience the survival horror masterpiece, rebuilt for PS5 and PS4. Features modern gameplay and a reimagined storyline. <b>(يدعم اللغة العربية الكاملة)</b>",
            prices: [
                { label: "Primary PS5", value: 499 },
                { label: "Secondary PS5", value: 399 },
                { label: "Primary PS4", value: 349 },
                { label: "Secondary PS4", value: 299 }
            ],
            tags: ["Action", "Story", "Horror", "Arabic"],
            playStyle: ["Solo"],
            playTime: "1-3",
            difficulty: "Normal"
        },
        {
            id: 30,
            title: "Hitman 3 Parts",
            price: 0,
            image: "assets/images/hitman_3.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Story", "Stealth"],
            desc: "Enter the world of the ultimate assassin. Become Agent 47 in the dramatic conclusion to the World of Assassination trilogy.",
            prices: [
                { label: "Primary PS5", value: 649 },
                { label: "Primary PS4", value: 449 },
                { label: "Secondary", value: 399 }
            ],
            tags: ["Action", "Story", "Stealth"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 31,
            title: "It Takes Two",
            price: 0,
            image: "assets/images/it_takes_two.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Co-op", "Story"],
            desc: "Embark on the craziest journey of your life in It Takes Two. Invite a friend to join for free with Friend’s Pass and work together across a huge variety of glefully disruptive gameplay challenges.",
            prices: [
                { label: "Primary PS5", value: 349 },
                { label: "Primary PS4", value: 299 },
                { label: "Secondary", value: 199 }
            ],
            tags: ["Action", "Story", "Co-op"],
            playStyle: ["Co-op", "Online"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 32,
            title: "Assassin's Creed Shadows",
            price: 0,
            image: "assets/images/ac_shadows.png",
            category: "Action",
            platform: "PS5",
            rating: 5,
            styles: ["Story", "Adventure", "Stealth"],
            desc: "Live the intertwined stories of Naoe, an adept shinobi Assassin from Iga Province, and Yasuke, the powerful African samurai of historical legend.",
            prices: [
                { label: "Primary PS5", value: 1399 },
                { label: "Secondary PS5", value: 989 }
            ],
            tags: ["Action", "Story", "Open World"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 33,
            title: "Last Of Us 1 Remake",
            price: 0,
            image: "assets/images/tlou_remake.png",
            category: "Action",
            platform: "PS5",
            rating: 5,
            styles: ["Story", "Adventure"],
            desc: "Experience the emotional storytelling and unforgettable characters in The Last of Us, rebuilt for the PlayStation 5 console.",
            prices: [
                { label: "Primary PS5", value: 999 },
                { label: "Secondary PS5", value: 599 }
            ],
            tags: ["Action", "Story", "Adventure"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 34,
            title: "Mortal Kombat 1",
            price: 0,
            image: "assets/images/mk1.png",
            category: "Action",
            platform: "PS5",
            rating: 5,
            styles: ["Story", "Competitive"],
            desc: "It's In Our Blood. Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. Mortal Kombat 1 ushers in a new era of the iconic franchise.",
            prices: [
                { label: "Primary PS5", value: 589 },
                { label: "Secondary PS5", value: 369 }
            ],
            tags: ["Action", "Competitive", "Fighting"],
            playStyle: ["Solo", "Online", "Co-op"],
            playTime: "1-3",
            difficulty: "Normal"
        },
        {
            id: 35,
            title: "Cyberpunk 2077",
            price: 0,
            image: "assets/images/cyberpunk_2077.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Story", "Open World"],
            desc: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival.",
            prices: [
                { label: "Primary PS5", value: 699 },
                { label: "Primary PS4", value: 429 },
                { label: "Secondary", value: 399 }
            ],
            tags: ["Action", "Open World", "Story", "RPG"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 36,
            title: "Alan Wake 2",
            price: 0,
            image: "assets/images/alan_wake_2.png",
            category: "Action",
            platform: "PS5",
            rating: 5,
            styles: ["Story", "Horror"],
            desc: "A string of ritualistic murders threatens Bright Falls, an idyllic small-town community in the Pacific Northwest. Alan Wake, a trapped writer, and Saga Anderson, an FBI agent, must face the darkness.",
            prices: [
                { label: "Primary PS5", value: 999 },
                { label: "Secondary PS5", value: 549 }
            ],
            tags: ["Action", "Story", "Horror", "Mystery"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Hard"
        },
        {
            id: 37,
            title: "Detroit: Become Human",
            price: 0,
            image: "assets/images/detroit.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Story", "Adventure"],
            desc: "How far will you go to be free? Detroit 2038. Technology has evolved to a point where human like androids are everywhere. They speak, move and behave like human beings, but they are only machines serving humans.",
            prices: [
                { label: "Primary PS5", value: 380 },
                { label: "Primary PS4", value: 380 },
                { label: "Secondary", value: 280 }
            ],
            tags: ["Action", "Story", "Adventure", "Sci-Fi"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 38,
            title: "Last of Us Part II",
            price: 0,
            image: "assets/images/tlou2.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Story", "Adventure"],
            desc: "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors.",
            prices: [
                { label: "Primary PS5", value: 649 },
                { label: "Primary PS4", value: 549 },
                { label: "Secondary", value: 449 }
            ],
            tags: ["Action", "Story", "Adventure", "Gore"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Hard"
        },
        {
            id: 39,
            title: "Split Fiction",
            price: 0,
            image: "assets/images/split_fiction.png",
            category: "Action",
            platform: "PS5",
            rating: 5,
            styles: ["Story", "Adventure"],
            desc: "A gripping tale of choice and consequence. Split Fiction takes you through a narrative where every decision splits the reality around you.",
            prices: [
                { label: "Primary PS5", value: 1049 },
                { label: "Secondary", value: 679 },
                { label: "Full Account", value: 2049 }
            ],
            tags: ["Action", "Story", "Indie"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 40,
            title: "Spider-Man: Miles Morales",
            price: 0,
            image: "assets/images/miles_morales.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Action", "Adventure"],
            desc: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man. <b>(يدعم اللغتين العربية والإنجليزية)</b>",
            prices: [
                { label: "Primary PS5", value: 500 },
                { label: "Primary PS4", value: 500 },
                { label: "Secondary", value: 400 }
            ],
            tags: ["Action", "Adventure", "Superhero", "Arabic"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 41,
            title: "Need for Speed Heat",
            price: 0,
            image: "assets/images/nfs_heat.png",
            category: "Sports",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Racing", "Open World"],
            desc: "Hustle by day and risk it all by night in Need for Speed Heat, a white-knuckle street racer, where the lines of the law fade as the sun starts to set.",
            prices: [
                { label: "Primary PS5", value: 200 },
                { label: "Primary PS4", value: 200 },
                { label: "Secondary", value: 100 }
            ],
            tags: ["Racing", "Open World", "Action"],
            playStyle: ["Solo", "Online"],
            playTime: "3+",
            difficulty: "Normal"
        },
        {
            id: 42,
            title: "Sekiro: Shadows Die Twice",
            price: 0,
            image: "assets/images/sekiro.png",
            category: "Action",
            platform: "PS5/PS4",
            rating: 5,
            styles: ["Action", "Hard"],
            desc: "Take Revenge. Restore Your Honor. Kill Ingeniously. You are the 'one-armed wolf', a disgraced and disfigured warrior rescued from the brink of death.",
            prices: [
                { label: "Primary PS5", value: 449 },
                { label: "Primary PS4", value: 449 },
                { label: "Secondary", value: 349 }
            ],
            tags: ["Action", "Hard", "Souls-like"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Hard"
        },
        {
            id: 43,
            title: "Mafia: The Old Country",
            price: 0,
            image: "assets/images/mafia_old_country.png",
            category: "Action",
            platform: "PS5",
            rating: 5,
            styles: ["Story", "Action"],
            desc: "Uncover the origins of organized crime in Mafia: The Old Country, a gritty mob story set in the brutal underworld of 1900s Sicily.",
            prices: [
                { label: "Primary PS5", value: 1349 },
                { label: "Secondary PS5", value: 899 }
            ],
            tags: ["Action", "Story", "Crime"],
            playStyle: ["Solo"],
            playTime: "3+",
            difficulty: "Normal"
        }
    ];

    async function loadGamesFromServer() {
        try {
            const response = await fetch(`${API_URL}/games`);
            if (response.ok) {
                const data = await response.json();
                if (data && data.length > 0) {
                    games = data;
                }
            }
        } catch (error) {
            console.error('Error loading games from server:', error);
        }

        if (typeof filterAndRender === 'function') {
            const term = searchInput ? searchInput.value.toLowerCase() : '';
            filterAndRender(term, currentCategory);
        }
    }

    const subscriptionItems = [
        {
            id: 101,
            title: "PlayStation Plus Essential",
            price: 499,
            image: "assets/images/red_essential_logo.jpg",
            category: "Subscription",
            platform: "PS5/PS4",
            desc: "Essential features for your PlayStation experience.",
            prices: [
                { label: "1 Month - Full Account", value: 500 },
                { label: "3 Months - Full Account", value: 1146 },
                { label: "3 Months - Prim PS5", value: 889 },
                { label: "3 Months - Prim PS4", value: 419 },
                { label: "3 Months - Secondary", value: 99 },
                { label: "1 Year - Full Account", value: 2999 },
                { label: "1 Year - Prim PS5", value: 2299 },
                { label: "1 Year - Prim PS4", value: 899 },
                { label: "1 Year - Secondary", value: 249 }
            ]
        },
        {
            id: 102,
            title: "PlayStation Plus Extra",
            price: 669,
            image: "assets/images/red_extra_logo.jpg",
            category: "Subscription",
            platform: "PS5/PS4",
            desc: "Hundreds of games at your fingertips.",
            prices: [
                { label: "1 Month - Full Account", value: 669 },
                { label: "3 Months - Full Account", value: 1849 },
                { label: "3 Months - Prim PS5", value: 1299 },
                { label: "3 Months - Prim PS4", value: 599 },
                { label: "3 Months - Secondary", value: 249 },
                { label: "1 Year - Full Account", value: 4999 },
                { label: "1 Year - Prim PS5", value: 3349 },
                { label: "1 Year - Prim PS4", value: 1249 },
                { label: "1 Year - Secondary", value: 899 }
            ]
        },
        {
            id: 103,
            title: "PlayStation Plus Premium",
            price: 799,
            image: "assets/images/red_premium_logo.jpg",
            category: "Subscription",
            platform: "PS5/PS4",
            desc: "The ultimate PlayStation experience with classics and trials.",
            prices: [
                { label: "1 Month - Full Account", value: 799 },
                { label: "3 Months - Full Account", value: 2199 },
                { label: "1 Year - Full Account", value: 5899 }
            ]
        }
    ];

    /* ----------------------------------------------------
       STATE
       ---------------------------------------------------- */
    let cart = JSON.parse(localStorage.getItem('redzone_cart')) || [];
    let currentCategory = 'All';

    /* ----------------------------------------------------
       DOM ELEMENTS
       ---------------------------------------------------- */
    const grid = document.getElementById('games-grid');
    const searchInput = document.querySelector('.search-input'); // In-page filter
    const filterButtons = document.querySelectorAll('.filter-tabs button');

    // Auth Modal
    const loginModal = document.getElementById('login-modal');
    const loginBtn = document.getElementById('login-btn');
    const closeLogin = document.getElementById('close-login');
    const loginForm = document.getElementById('login-form');

    // Product Modal
    const productModal = document.getElementById('product-modal');
    const closeProduct = document.getElementById('close-product');
    const confirmBuyBtn = document.getElementById('confirm-buy-btn');
    const cancelBuyBtn = document.getElementById('cancel-btn');

    // Cart Sidebar
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartBtn = document.getElementById('cart-btn');
    const closeSidebar = document.querySelector('.close-sidebar');
    const backdrop = document.getElementById('overlay-backdrop');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalCount = document.querySelector('.cart-count');
    const cartSidebarCount = document.getElementById('cart-total-count');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Search Overlay
    const searchOverlay = document.getElementById('search-overlay');
    const searchBtn = document.getElementById('search-btn');
    const closeOverlay = document.querySelector('.close-overlay');
    const globalSearchInput = document.getElementById('global-search');

    // Smart Picker
    const smartPickerModal = document.getElementById('smart-picker-modal');
    const smartPickerBtn = document.getElementById('smart-picker-btn');
    const closePicker = document.getElementById('close-picker');
    const pickerWizard = document.getElementById('picker-wizard');
    const pickerBack = document.getElementById('picker-back');
    const pickerProgress = document.getElementById('picker-progress');

    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinksContainer = document.getElementById('main-nav');

    /* ----------------------------------------------------
       THEME FUNCTIONS
       ---------------------------------------------------- */

    function setTheme(theme) {
        if (theme === 'light') {
            document.documentElement.classList.add('light-mode');
            if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            document.documentElement.classList.remove('light-mode');
            if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const isLight = document.documentElement.classList.contains('light-mode');
        setTheme(isLight ? 'dark' : 'light');
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);

    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = navLinksContainer.classList.toggle('active');
            if (backdrop) backdrop.classList.toggle('show', isActive);

            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.className = isActive ? 'fas fa-times' : 'fas fa-bars';
            }
        });

        // Close menu when clicking a link
        navLinksContainer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
                if (backdrop) backdrop.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinksContainer.classList.contains('active') &&
                !mobileMenuBtn.contains(e.target) &&
                !navLinksContainer.contains(e.target)) {
                navLinksContainer.classList.remove('active');
                if (backdrop) backdrop.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            }
        });
    }

    // Global Backdrop Click Listener (Closes Sidebars/Menus)
    if (backdrop) {
        backdrop.addEventListener('click', () => {
            // Close Cart
            if (cartSidebar && cartSidebar.classList.contains('open')) {
                window.toggleCart();
            }
            // Close Mobile Menu
            if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                backdrop.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            }
        });
    }

    /* ----------------------------------------------------
       AUTH & DATABASE FUNCTIONS
       ---------------------------------------------------- */

    // Get all users from localStorage
    function getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }

    // Save users to localStorage
    function saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Current User Session
    function setCurrentUser(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateAuthUI(user);
    }

    function getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    function logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        updateAuthUI(null);
        showToast('You have been logged out.');
    }

    function updateAuthUI(user) {
        const loginView = document.getElementById('login-view');
        const signupView = document.getElementById('signup-view');
        const profileView = document.getElementById('profile-view');
        const settingsView = document.getElementById('settings-view');
        const userDisplayEmail = document.getElementById('user-display-email');
        const profileIconContainer = document.getElementById('profile-icon-container');

        if (user) {
            loginBtn.innerHTML = '<i class="fas fa-user-check"></i>';
            loginBtn.style.color = 'var(--accent-red)';
            loginBtn.title = `Logged in as ${sanitizeHTML(user.email)}`;

            if (userDisplayEmail) userDisplayEmail.innerText = user.username || user.email;
            if (profileIconContainer) {
                const avatarIcon = user.avatar || 'user-circle';
                profileIconContainer.innerHTML = `<i class="fas fa-${avatarIcon}" style="font-size: 4rem; color: var(--accent-red); margin-bottom: 20px;"></i>`;
            }

            // If modal is open, show profile view
            if (loginView) loginView.style.display = 'none';
            if (signupView) signupView.style.display = 'none';
            if (profileView) profileView.style.display = 'block';
        } else {
            loginBtn.innerHTML = '<i class="fas fa-user"></i>';
            loginBtn.style.color = '';
            loginBtn.title = 'Login / Sign Up';

            if (loginView) loginView.style.display = 'block';
            if (signupView) signupView.style.display = 'none';
            if (profileView) profileView.style.display = 'none';
            if (settingsView) settingsView.style.display = 'none';
        }
    }

    // Check session on load
    const userSession = getCurrentUser();
    updateAuthUI(userSession);
    loadGamesFromServer();

    /* ----------------------------------------------------
       SECURITY & CORE FUNCTIONS
       ---------------------------------------------------- */

    function sanitizeHTML(str) {
        if (!str) return '';
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }

    function renderGames(gamesList) {
        if (!grid) return; // Exit if no grid found (e.g., on Plus page)
        const fragment = document.createDocumentFragment();
        grid.innerHTML = '';
        if (gamesList.length === 0) {
            grid.innerHTML = '<p style="color:var(--text-main); text-align:center; grid-column: 1/-1; padding: 50px;">No games found in this category.</p>';
            return;
        }

        const user = getCurrentUser();
        const wishlist = user ? (user.wishlist || []) : [];

        gamesList.forEach((game, index) => {
            const card = document.createElement('div');
            card.classList.add('game-card');

            const isWishlisted = wishlist.includes(game.id);
            const heartIconClass = isWishlisted ? 'fas fa-heart' : 'far fa-heart';
            const heartColor = isWishlisted ? 'var(--accent-red)' : '';

            // Rating Stars
            const starCount = game.rating || 5;
            const stars = `<span aria-hidden="true" title="${starCount} Stars">` + '⭐'.repeat(starCount) + `</span><span class="sr-only">${starCount} out of 5 stars</span>`;

            // Style Tag
            const styleTag = game.styles && game.styles.length > 0
                ? `<span class="style-tag">${game.styles[0]}</span>`
                : '';

            const priceDisplay = (game.price === 0 || game.price === undefined)
                ? `<span class="game-price clickable" onclick="openGameModal(${game.id}, event)" style="font-size: 0.8rem; white-space: nowrap; cursor: pointer; text-decoration: underline;">👁️ View Price</span>`
                : `<span class="game-price">$${game.price}</span>`;

            card.innerHTML = `
                <div class="card-image" onclick="openGameModal(${game.id})">
                    <img src="${game.image}" alt="${sanitizeHTML(game.title)}" loading="lazy" onerror="this.src='assets/images/cover-action.png'">
                    ${styleTag}
                </div>
                <div class="card-content">
                    <span class="game-platform">${sanitizeHTML(game.platform)}</span>
                    <h3 class="game-title" title="${sanitizeHTML(game.title)}">${sanitizeHTML(game.title)}</h3>
                    <div class="star-rating">${stars}</div>
                    <div class="game-meta">
                        ${priceDisplay}
                        <div style="display: flex; gap: 8px;">
                            <button class="wishlist-btn" onclick="toggleWishlist(${game.id}, event)" style="color: ${heartColor}">
                                <i class="${heartIconClass}"></i>
                            </button>
                            <button class="add-cart-btn" onclick="openGameModal(${game.id}, event)">
                                View Game
                            </button>
                        </div>
                    </div>
                </div>
            `;
            fragment.appendChild(card);

            // Staggered Entrance Animation - Keeping the effect as requested
            setTimeout(() => card.classList.add('reveal'), index * 60);
        });

        grid.appendChild(fragment);
    }

    // Wishlist Toggle with Backend Sync
    window.toggleWishlist = async (id, event) => {
        event.stopPropagation();
        const user = getCurrentUser();

        if (!user) {
            showToast('Please login to add games to your library!', true);
            openModal(loginModal);
            return;
        }

        if (!user.wishlist) user.wishlist = [];

        const index = user.wishlist.indexOf(id);
        const action = index > -1 ? 'remove' : 'add';

        // Optimistic update
        if (index > -1) {
            user.wishlist.splice(index, 1);
        } else {
            user.wishlist.push(id);
        }

        // Update currentUser session
        setCurrentUser(user);

        // Sync with backend if token exists
        const token = localStorage.getItem('token');
        if (token) {
            try {
                await api.put('/users/wishlist', { gameId: id, action });
            } catch (error) {
                console.error('Failed to sync wishlist:', error);
                // Revert on error
                if (action === 'add') {
                    user.wishlist = user.wishlist.filter(gid => gid !== id);
                } else {
                    user.wishlist.push(id);
                }
                setCurrentUser(user);
            }
        } else {
            // Fallback to localStorage for guests
            const users = getUsers();
            const userIdx = users.findIndex(u => u.email === user.email);
            if (userIdx > -1) {
                users[userIdx].wishlist = user.wishlist;
                saveUsers(users);
            }
        }

        // Re-render based on current state
        const sectionTitle = document.querySelector('.games-section .section-title');
        if (sectionTitle && sectionTitle.innerText.includes('Library')) {
            const wishlistedGames = games.filter(g => user.wishlist.includes(g.id));
            renderGames(wishlistedGames);
        } else {
            filterAndRender(searchInput.value.toLowerCase(), currentCategory);
        }
    };

    // Expose filterNav to window for HTML onclick
    window.filterNav = (category) => {
        // Find existing button
        const btn = Array.from(filterButtons).find(b => b.dataset.category && b.dataset.category.toUpperCase() === category.toUpperCase());
        if (btn) btn.click();

        // Scroll to games
        document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
    };

    function filterAndRender(term, category) {
        const platformFilter = document.getElementById('platform-filter');
        const priceFilter = document.getElementById('price-filter');
        
        const selectedPlatform = platformFilter ? platformFilter.value : 'All';
        const maxPrice = priceFilter ? parseInt(priceFilter.value) : 3000;

        const filtered = games.filter(game => {
            const matchesSearch = game.title.toLowerCase().includes(term);
            const normalizedGameCat = game.category.toUpperCase();
            const normalizedFilter = category.toUpperCase();

            // EXCLUDE SUBSCRIPTIONS FROM HOME GRID
            if (normalizedGameCat === 'SUBSCRIPTION') return false;

            const matchesCategory = category === '' || category === 'All' || normalizedFilter === 'ALL' || normalizedGameCat === normalizedFilter;
            
            // Platform
            let matchesPlatform = true;
            if (selectedPlatform !== 'All') {
                matchesPlatform = game.platform && game.platform.includes(selectedPlatform);
            }

            // Price
            let minGamePrice = game.price || Infinity;
            if (game.prices && game.prices.length > 0) {
                minGamePrice = Math.min(...game.prices.map(p => p.value));
            }
            if(minGamePrice === Infinity || minGamePrice === 0) {
                 // if no price info or price is 0 (view price), still show it
                 minGamePrice = 0;
            }

            const matchesPrice = minGamePrice <= maxPrice;

            return matchesSearch && matchesCategory && matchesPlatform && matchesPrice;
        });
        renderGames(filtered);
    }

    // Attach listeners dynamically just in case they exist
    setTimeout(() => {
        const pF = document.getElementById('platform-filter');
        const prF = document.getElementById('price-filter');
        const prD = document.getElementById('price-display');
        const sI = document.querySelector('.search-input');

        if (pF) {
            pF.addEventListener('change', () => {
                filterAndRender(sI ? sI.value.toLowerCase() : '', currentCategory);
            });
        }
        if (prF) {
            prF.addEventListener('input', (e) => {
                if (prD) prD.innerText = e.target.value;
                filterAndRender(sI ? sI.value.toLowerCase() : '', currentCategory);
            });
        }
    }, 100);

    window.updateCartUI = () => {
        // Update Badges
        cartTotalCount.innerText = cart.length;
        cartSidebarCount.innerText = cart.length;

        // Calculate Total
        const total = cart.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
        cartTotalPrice.innerText = total.toFixed(2) + ' EGP';

        // Persist
        localStorage.setItem('redzone_cart', JSON.stringify(cart));

        // Render Sidebar Items
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
        } else {
            cart.forEach((item, index) => {
                const itemEl = document.createElement('div');
                itemEl.classList.add('cart-item');
                const isSubscription = item.category === 'Subscription';
                const itemMedia = isSubscription
                    ? `<div class="cart-plus-badge"><i class="fas fa-plus"></i></div>`
                    : `<img src="${item.image}" onerror="this.src='assets/images/cover-action.png'">`;

                itemEl.innerHTML = `
                    ${itemMedia}
                    <div class="cart-item-details">
                        <span class="cart-item-title">${sanitizeHTML(item.title)}</span> <span style="font-size:0.8em; color: gray;">${sanitizeHTML(item.variant || '')}</span>
                        <span class="cart-item-price">${item.price === 0 ? '👁️ View Price' : item.price + ' EGP'}</span>
                        <br>
                        <button class="remove-item" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemEl);
            });
        }
    }

    /* ----------------------------------------------------
       GLOBAL EXPORTS (Window)
       ---------------------------------------------------- */

    window.openGameModal = (id) => {
        const game = games.find(g => g.id === id);
        if (!game) return;

        document.getElementById('modal-img').src = game.image;
        document.getElementById('modal-title').innerText = game.title;
        document.getElementById('modal-desc').innerHTML = game.desc || "Experience this amazing title on PS5.";

        const priceTag = document.getElementById('modal-price');
        // Clear previous selector if any
        const existingSelector = document.getElementById('game-price-selector');
        if (existingSelector) existingSelector.remove();

        let selectedPrice = game.price;
        let selectedVariant = '';

        if (game.prices && game.prices.length > 0) {
            // Create selector
            const select = document.createElement('select');
            select.id = 'game-price-selector';
            select.style.cssText = 'padding: 12px; margin-bottom: 15px; border-radius: 8px; border: 1px solid #333; background: #0d0d0d; color: white; width: 100%; font-family: inherit; font-size: 0.95rem; cursor: pointer;';

            game.prices.forEach((p, idx) => {
                const opt = document.createElement('option');
                opt.value = idx;
                opt.text = `${p.label} - ${p.value} EGP`;
                select.appendChild(opt);
            });

            // Prepend to metaDiv so it shows first
            const metaDiv = document.querySelector('.modal-meta');
            metaDiv.insertBefore(select, metaDiv.firstChild);

            // Initial value
            selectedPrice = game.prices[0].value;
            selectedVariant = game.prices[0].label;
            priceTag.innerText = selectedPrice + ' EGP';

            select.addEventListener('change', (e) => {
                const idx = e.target.value;
                selectedPrice = game.prices[idx].value;
                selectedVariant = game.prices[idx].label;
                priceTag.innerText = selectedPrice + ' EGP';
            });
        } else {
            priceTag.innerText = (game.price === 0 || game.price === undefined ? '👁️ View Price' : game.price + ' EGP');
        }

        // Update Add to Cart action in Modal
        confirmBuyBtn.onclick = () => {
            addToCart(game.id, null, { price: selectedPrice, variant: selectedVariant });
            closeModal(productModal);
        };

        // Cinematic Enhancement: Add Particles
        const modalContent = productModal.querySelector('.modal-content');
        let particleContainer = modalContent.querySelector('.cinematic-particles');

        // Remove old particles if any
        if (particleContainer) particleContainer.remove();

        // Create new particle container
        particleContainer = document.createElement('div');
        particleContainer.className = 'cinematic-particles';

        // Generate 12 particles with random positions and delays
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = i % 4 === 0 ? 'particle red' : 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animationDuration = (6 + Math.random() * 4) + 's';
            particle.style.setProperty('--drift', (Math.random() * 40 - 20) + 'px');
            particleContainer.appendChild(particle);
        }

        modalContent.insertBefore(particleContainer, modalContent.firstChild);

        // Sound Effect Integration
        if (window.soundEnabled && window.sounds && window.sounds.click) {
            window.sounds.click.play().catch(() => { });
        }

        openModal(productModal);
    };

    window.addToCart = (id, event, options = null) => {
        if (event) {
            event.stopPropagation();
            if (window.playSoundInternal) window.playSoundInternal('click');
        }

        const game = games.find(g => g.id === id) || subscriptionItems.find(s => s.id === id);
        if (game) {
            // Determine price and variant
            let finalPrice = game.price || 0;
            let finalVariant = '';

            if (options) {
                finalPrice = options.price;
                finalVariant = options.variant;
            } else if (game.prices && game.prices.length > 0) {
                // If added from grid without options, default to first option
                finalPrice = game.prices[0].value;
                finalVariant = game.prices[0].label;
            }

            // Push copy to cart
            cart.push({ ...game, price: finalPrice, variant: finalVariant });
            updateCartUI();

            // Visual feedback
            const btn = event ? (event.currentTarget || event.target) : null;
            if (btn) {
                const originalContent = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i>';
                btn.classList.add('btn-success');
                setTimeout(() => {
                    btn.innerHTML = originalContent;
                    btn.classList.remove('btn-success');
                }, 1000);
            }

            // Always open cart for subscriptions or if no button
            if (game.category === 'Subscription' || !btn) {
                setTimeout(() => {
                    if (!cartSidebar.classList.contains('open')) {
                        window.toggleCart();
                    }
                }, 300);
            }
        }
    };

    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        updateCartUI();
    };

    window.refreshCart = () => {
        cart = JSON.parse(localStorage.getItem('redzone_cart')) || [];
        updateCartUI();
    };

    /* ----------------------------------------------------
       SMART PICKER LOGIC
       ---------------------------------------------------- */
    let currentStep = 0;
    let userSelections = {};

    const pickerSteps = [
        {
            question: "step_enjoy",
            key: "tags",
            options: [
                { label: "opt_story", value: "Story", icon: "fas fa-book" },
                { label: "opt_action", value: "Action", icon: "fas fa-khanda" },
                { label: "opt_comp", value: "Competitive", icon: "fas fa-trophy" },
                { label: "opt_open", value: "Open World", icon: "fas fa-globe" }
            ]
        },
        {
            question: "step_play",
            key: "playStyle",
            options: [
                { label: "opt_solo", value: "Solo", icon: "fas fa-user" },
                { label: "opt_online", value: "Online", icon: "fas fa-wifi" },
                { label: "opt_coop", value: "Co-op", icon: "fas fa-users" }
            ]
        },
        {
            question: "step_time",
            key: "playTime",
            options: [
                { label: "opt_less1", value: "Less than 1", icon: "far fa-clock" },
                { label: "opt_1to3", value: "1-3", icon: "fas fa-clock" },
                { label: "opt_3plus", value: "3+", icon: "fas fa-hourglass-half" }
            ]
        },
        {
            question: "step_diff",
            key: "difficulty",
            options: [
                { label: "opt_easy", value: "Easy", icon: "fas fa-leaf" },
                { label: "opt_normal", value: "Normal", icon: "fas fa-balance-scale" },
                { label: "opt_hard", value: "Hard", icon: "fas fa-fire" }
            ]
        }
    ];

    function translateStr(key) {
        return translations[currentLang][key] || key;
    }

    function renderPickerStep() {
        if (currentStep >= pickerSteps.length) {
            showPickerResults();
            return;
        }

        const step = pickerSteps[currentStep];
        if (pickerBack) {
            pickerBack.style.display = currentStep > 0 ? 'block' : 'none';
            pickerBack.innerText = translateStr('picker_back');
        }

        // Progress Dots
        if (pickerProgress) {
            pickerProgress.innerHTML = pickerSteps.map((_, i) =>
                `<div class="dot ${i <= currentStep ? 'active' : ''}"></div>`
            ).join('');
        }

        pickerWizard.innerHTML = `
            <div class="picker-step scroll-reveal visible">
                <h2>${translateStr(step.question)}</h2>
                <div class="options-grid">
                    ${step.options.map(opt => `
                        <div class="picker-option" onclick="handlePickerSelection('${step.key}', '${opt.value}')">
                            <i class="${opt.icon}"></i>
                            <span>${translateStr(opt.label)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    window.handlePickerSelection = (key, value) => {
        userSelections[key] = value;
        currentStep++;
        renderPickerStep();
    };

    if (pickerBack) {
        pickerBack.addEventListener('click', () => {
            currentStep--;
            renderPickerStep();
        });
    }

    function showPickerResults() {
        const matches = games.filter(game => {
            if (game.category === 'Subscription') return false;
            let score = 0;
            if (game.tags && game.tags.includes(userSelections.tags)) score += 2;
            if (game.playStyle && game.playStyle.includes(userSelections.playStyle)) score += 1;
            if (game.playTime === userSelections.playTime) score += 1;
            if (game.difficulty === userSelections.difficulty) score += 1;
            return score >= 3;
        }).slice(0, 3);

        const finalMatches = matches.length > 0 ? matches : games.slice(0, 3);

        pickerWizard.innerHTML = `
            <div class="results-screen scroll-reveal visible">
                <div class="results-header">
                    <h2>${translateStr('picker_results_title')}</h2>
                    <p>${translateStr('picker_results_desc')}</p>
                </div>
                <div class="recommended-grid">
                    ${finalMatches.map(game => `
                        <div class="rec-card" onclick="openGameModal(${game.id}); closeModal(smartPickerModal);">
                            <img src="${game.image}" alt="${sanitizeHTML(game.title)}">
                            <div class="rec-info">
                                <h4>${sanitizeHTML(game.title)}</h4>
                                <div class="rec-tags">
                                    <span>${sanitizeHTML(game.category)}</span>
                                    <span>${sanitizeHTML(game.difficulty)}</span>
                                </div>
                            </div>
                            <button class="cta-btn" style="padding: 5px 15px; font-size: 0.7rem; margin-left: auto;">${translateStr('picker_view')}</button>
                        </div>
                    `).join('')}
                </div>
                <button class="secondary-btn" onclick="resetPicker()" style="margin-top: 20px;">${translateStr('picker_try_again')}</button>
            </div>
        `;
        pickerBack.style.display = 'none';
        pickerProgress.innerHTML = '';
    }

    window.resetPicker = () => {
        currentStep = 0;
        userSelections = {};
        renderPickerStep();
    };

    /* ----------------------------------------------------
       EVENT LISTENERS & HELPER
       ---------------------------------------------------- */

    window.openModal = (el) => {
        if (!el) return;
        el.style.display = 'flex';
        setTimeout(() => el.classList.add('show'), 10);
    };

    window.closeModal = (el) => {
        if (!el) return;
        el.classList.remove('show');
        setTimeout(() => el.style.display = 'none', 300);
    };

    window.toggleCart = () => {
        cartSidebar.classList.toggle('open');
        backdrop.classList.toggle('show');
    };

    // Login
    loginBtn.addEventListener('click', () => {
        const user = getCurrentUser();
        openModal(loginModal);
        updateAuthUI(user);
    });
    if (closeLogin) closeLogin.addEventListener('click', () => closeModal(loginModal));

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = loginForm.querySelector('input[type="email"]');
            const passwordInput = loginForm.querySelector('input[type="password"]');
            if (!emailInput || !passwordInput) return;

            const email = emailInput.value;
            const password = passwordInput.value;

            try {
                const data = await api.post('/users/login', { email, password });
                if (data) {
                    localStorage.setItem('token', data.token);
                    setCurrentUser(data);

                    if (data.role === 'admin') {
                        localStorage.setItem('adminToken', data.token);
                        localStorage.setItem('adminUser', JSON.stringify(data));
                        window.location.href = 'admin.html';
                        return;
                    }

                    showToast(`Welcome back, ${sanitizeHTML(data.name || email.split('@')[0])}!`);
                    closeModal(loginModal);
                }
            } catch (error) {
                showToast(error.message || 'Invalid email or password.', true);
            }
        });
    }

    // Sign Up Switching
    const toSignupLink = document.getElementById('to-signup');
    const toLoginLink = document.getElementById('to-login');
    const loginView = document.getElementById('login-view');
    const signupView = document.getElementById('signup-view');

    toSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginView.style.display = 'none';
        signupView.style.display = 'block';
    });

    toLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupView.style.display = 'none';
        loginView.style.display = 'block';
    });

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('signup-email');
            const passwordInput = document.getElementById('signup-password');
            if (!emailInput || !passwordInput) return;

            const email = emailInput.value;
            const password = passwordInput.value;

            try {
                const data = await api.post('/users/register', { email, password });
                if (data) {
                    localStorage.setItem('token', data.token);
                    setCurrentUser(data);
                    showToast(`Welcome to Red Zone, ${sanitizeHTML(email.split('@')[0])}!`);
                    closeModal(loginModal);
                    loginForm.reset();
                    signupForm.reset();
                }
            } catch (error) {
                showToast(error.message || 'Registration failed. Please try again.', true);
            }
        });
    }

    // Social View Triggers
    const gmailTrigger = document.getElementById('gmail-signup-trigger');
    const fbTrigger = document.getElementById('fb-signup-trigger');
    const icloudTrigger = document.getElementById('icloud-signup-trigger');

    const gmailView = document.getElementById('gmail-view');
    const fbView = document.getElementById('fb-view');
    const icloudView = document.getElementById('icloud-view');

    const switchSocialView = (targetView) => {
        const verificationView = document.getElementById('verification-view');
        [loginView, signupView, gmailView, fbView, icloudView, verificationView].forEach(view => {
            if (view) view.style.display = 'none';
        });
        if (targetView) targetView.style.display = 'block';
    };

    if (gmailTrigger) gmailTrigger.addEventListener('click', () => switchSocialView(gmailView));
    if (fbTrigger) fbTrigger.addEventListener('click', () => switchSocialView(fbView));
    if (icloudTrigger) icloudTrigger.addEventListener('click', () => switchSocialView(icloudView));

    document.querySelectorAll('.back-to-auth').forEach(btn => {
        btn.addEventListener('click', () => switchSocialView(signupView));
    });

    window.openDetailedPlusModal = (id) => {
        const item = subscriptionItems.find(s => s.id === id);
        if (!item) return;

        const modal = document.getElementById('plus-pricing-modal');
        const content = document.getElementById('plus-pricing-content');
        const closeBtn = document.getElementById('close-plus-pricing');
        if (!modal || !content) return;

        if (closeBtn) {
            closeBtn.onclick = () => closeModal(modal);
        }

        // Categorize prices by duration
        const months1 = item.prices.filter(p => p.label.toLowerCase().includes('1 month'));
        const months3 = item.prices.filter(p => p.label.toLowerCase().includes('3 month'));
        const years1 = item.prices.filter(p => p.label.toLowerCase().includes('1 year'));

        let tableRows = '';

        const appendRows = (title, items) => {
            if (items.length > 0) {
                tableRows += `<tr class="duration-row"><td colspan="4">${title}</td></tr>`;
                items.forEach(p => {
                    const accountType = p.label.split(' - ')[1] || 'Standard';
                    tableRows += `
                        <tr>
                            <td>${title}</td>
                            <td>${accountType}</td>
                            <td class="price-cell">${p.value}</td>
                            <td><button class="cta-btn sm" onclick="addToCart(${id}, event, {variant: '${p.label}', price: ${p.value}}); closeModal(document.getElementById('plus-pricing-modal'))">Add</button></td>
                        </tr>
                    `;
                });
            }
        };

        appendRows('1 Month', months1);
        appendRows('3 Months', months3);
        appendRows('1 Year', years1);

        content.innerHTML = `
            <div class="pricing-header">
                <img src="${sanitizeHTML(item.image)}" alt="${sanitizeHTML(item.title)}" class="pricing-logo">
                <h2>${sanitizeHTML(item.title)}</h2>
                <p>Select your preferred duration and account type</p>
            </div>
            <div class="pricing-table-container">
                <table class="premium-pricing-table">
                    <thead>
                        <tr>
                            <th>Duration</th>
                            <th>Account Type</th>
                            <th>Price (EGP)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
        `;

        openModal(modal);
    };

    const handleSocialLogin = async (e, platform) => {
        e.preventDefault();
        const form = e.target;
        const emailInput = form.querySelector('input[type="email"]') || form.querySelector('input[type="text"]');
        const passwordInput = form.querySelector('input[type="password"]');
        const errorDisplay = form.querySelector('.auth-error-msg');

        if (!emailInput || !passwordInput || !errorDisplay) return;

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        // Reset state
        errorDisplay.style.display = 'none';
        errorDisplay.innerText = '';

        // 1. Domain & Format Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorDisplay.innerText = '⚠️ Please enter a valid email address.';
            errorDisplay.style.display = 'block';
            return;
        }

        if (platform === 'Gmail' && !email.toLowerCase().endsWith('@gmail.com')) {
            errorDisplay.innerText = '⚠️ Invalid Gmail address. Must end with @gmail.com';
            errorDisplay.style.display = 'block';
            return;
        }

        if (platform === 'iCloud' && !email.toLowerCase().endsWith('@icloud.com') && !email.toLowerCase().endsWith('@apple.com')) {
            errorDisplay.innerText = '⚠️ Invalid Apple ID. Must end with @icloud.com or @apple.com';
            errorDisplay.style.display = 'block';
            return;
        }

        // 2. Password Length Validation
        if (password.length < 8) {
            errorDisplay.innerText = '⚠️ Security Error: Password must be at least 8 characters.';
            errorDisplay.style.display = 'block';
            return;
        }

        // 3. High-Fidelity Verification Simulation
        const verificationView = document.getElementById('verification-view');
        const statusText = document.getElementById('verification-status');
        const detailsText = document.getElementById('verification-details');
        const progressFill = document.getElementById('verification-progress');

        // Hide current social view
        [gmailView, fbView, icloudView].forEach(v => { if (v) v.style.display = 'none'; });

        // Show Verification
        verificationView.style.display = 'block';
        statusText.innerText = `Connecting to ${platform}...`;
        detailsText.innerText = 'Establishing secure handshake';
        progressFill.style.width = '0%';

        // Animation Steps
        const steps = [
            { p: '30%', t: `Authenticating with ${platform} API...`, d: 'Exchanging security tokens' },
            { p: '60%', t: 'Verifying Credentials...', d: 'Validating encrypted password hash' },
            { p: '90%', t: 'Finalizing Account Sync...', d: 'Updating local storage' },
            { p: '100%', t: 'Account Verified!', d: 'Welcome aboard!' }
        ];

        for (let i = 0; i < steps.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 800)); // Delay per step
            progressFill.style.width = steps[i].p;
            statusText.innerText = steps[i].t;
            detailsText.innerText = steps[i].d;
        }

        try {
            // Final Database Sync
            let data;
            try {
                data = await api.post('/users/login', { email, password: 'social_login_dummy_pass' });
            } catch (err) {
                data = await api.post('/users/register', { email, password: 'social_login_dummy_pass' });
            }

            if (data) {
                localStorage.setItem('token', data.token);
                setCurrentUser(data);
                // Last small delay for effect
                await new Promise(resolve => setTimeout(resolve, 500));
                closeModal(loginModal);
                window.location.reload();
            }
        } catch (error) {
            verificationView.style.display = 'none';
            errorDisplay.innerText = '❌ Verification Failed: Connection to provider servers timed out.';
            errorDisplay.style.display = 'block';
            // Show the social view again
            if (platform === 'Gmail') gmailView.style.display = 'block';
            if (platform === 'Facebook') fbView.style.display = 'block';
            if (platform === 'iCloud') icloudView.style.display = 'block';
        }
    };

    const gmailForm = document.getElementById('gmail-login-form');
    const fbForm = document.getElementById('fb-login-form');
    const icloudForm = document.getElementById('icloud-login-form');

    if (gmailForm) gmailForm.addEventListener('submit', (e) => handleSocialLogin(e, 'Gmail'));
    if (fbForm) fbForm.addEventListener('submit', (e) => handleSocialLogin(e, 'Facebook'));
    if (icloudForm) icloudForm.addEventListener('submit', (e) => handleSocialLogin(e, 'iCloud'));

    // Logout Button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            logout();
            closeModal(loginModal);
            // Reload games to show public view
            if (games && games.length > 0) {
                renderGames(games);
            }
        });
    }

    const myLibraryBtn = document.getElementById('my-library-btn');
    if (myLibraryBtn) {
        myLibraryBtn.addEventListener('click', () => {
            const user = getCurrentUser();
            if (user && user.wishlist && user.wishlist.length > 0) {
                const wishlistedGames = games.filter(g => user.wishlist.includes(g.id) && g.category !== 'Subscription');
                const sectionTitle = document.querySelector('.games-section .section-title');
                if (sectionTitle) {
                    sectionTitle.innerHTML = `<i class="fas fa-heart"></i> My Account <span style="color: var(--accent-red)">Library</span>`;
                }
                renderGames(wishlistedGames);
                closeModal(loginModal);
                document.getElementById('games').scrollIntoView({ behavior: 'smooth' });

                // Show a reset/exit button or just let them use category tabs
            } else {
                showToast('Your library is empty. Heart some games to see them here!', true);
            }
        });
    }

    // Settings View Logic
    const toSettingsBtn = document.getElementById('to-settings');
    const backToProfileBtn = document.getElementById('back-to-profile');
    const settingsView = document.getElementById('settings-view');
    const settingsForm = document.getElementById('settings-form');
    const avatarOptions = document.querySelectorAll('.avatar-option');
    let selectedAvatar = 'user-circle';

    if (toSettingsBtn) {
        toSettingsBtn.addEventListener('click', () => {
            const user = getCurrentUser();
            if (user) {
                document.getElementById('profile-view').style.display = 'none';
                settingsView.style.display = 'block';
                document.getElementById('settings-username').value = user.username || '';

                // Highlight current avatar
                selectedAvatar = user.avatar || 'user-circle';
                avatarOptions.forEach(opt => {
                    opt.classList.toggle('selected', opt.dataset.avatar === selectedAvatar);
                });
            }
        });
    }

    if (backToProfileBtn) {
        backToProfileBtn.addEventListener('click', () => {
            settingsView.style.display = 'none';
            document.getElementById('profile-view').style.display = 'block';
        });
    }

    avatarOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            avatarOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedAvatar = opt.dataset.avatar;
        });
    });

    if (settingsForm) {
        settingsForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const user = getCurrentUser();
            const newUsername = document.getElementById('settings-username').value;
            const currentPass = document.getElementById('current-password').value;
            const newPass = document.getElementById('new-password').value;

            const updateData = {};
            if (newUsername) updateData.username = newUsername;
            if (selectedAvatar) updateData.avatar = selectedAvatar;
            if (newPass) {
                if (newPass.length < 6) {
                    showToast('New password must be at least 6 characters.', true);
                    return;
                }
                updateData.password = newPass;
            }

            try {
                const data = await api.put('/users/profile', updateData);
                if (data) {
                    setCurrentUser(data);
                    showToast('Account settings saved!');
                    settingsView.style.display = 'none';
                    document.getElementById('profile-view').style.display = 'block';
                    updateAuthUI(data);
                }
            } catch (error) {
                showToast(error.message || 'Failed to update settings.', true);
            }
        });
    }

    // Play Styles Logic
    const playStylesModal = document.getElementById('play-styles-modal');
    const playStylesTrigger = document.getElementById('play-styles-trigger');
    const closePlayStyles = document.getElementById('close-play-styles');
    const styleOptions = document.querySelectorAll('.style-option');

    if (playStylesTrigger) {
        playStylesTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(playStylesModal);
        });
    }

    if (closePlayStyles) {
        closePlayStyles.addEventListener('click', () => closeModal(playStylesModal));
    }

    styleOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const selectedStyle = opt.dataset.style;
            const filtered = games.filter(g => g.styles && g.styles.includes(selectedStyle) && g.category !== 'Subscription');

            // UI Feedback: Update Title
            const sectionTitle = document.querySelector('.games-section .section-title');
            if (sectionTitle) {
                const styleName = opt.querySelector('span').innerText;
                sectionTitle.innerHTML = `<i class="${opt.querySelector('i').className}"></i> Discover <span style="color: var(--accent-red)">${styleName}</span>`;
            }

            renderGames(filtered);
            closeModal(playStylesModal);
            document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Product Modal
    if (closeProduct) closeProduct.addEventListener('click', () => closeModal(productModal));
    if (cancelBuyBtn) cancelBuyBtn.addEventListener('click', () => closeModal(productModal));

    // Cart
    if (cartBtn) cartBtn.addEventListener('click', window.toggleCart);
    if (closeSidebar) closeSidebar.addEventListener('click', window.toggleCart);
    if (backdrop) {
        backdrop.addEventListener('click', () => {
            if (cartSidebar) cartSidebar.classList.remove('open');
            backdrop.classList.remove('show');
        });
    }

    // Search Overlay
    if (searchBtn) searchBtn.addEventListener('click', () => searchOverlay && searchOverlay.classList.add('active'));
    if (closeOverlay) closeOverlay.addEventListener('click', () => searchOverlay && searchOverlay.classList.remove('active'));

    // Smart Picker
    if (smartPickerBtn) {
        smartPickerBtn.addEventListener('click', () => {
            openModal(smartPickerModal);
            resetPicker();
        });
    }
    if (closePicker) {
        closePicker.addEventListener('click', () => closeModal(smartPickerModal));
    }
    if (globalSearchInput) {
        globalSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                if (searchOverlay) searchOverlay.classList.remove('active');

                // Scroll to grid if it exists
                if (grid) {
                    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
                    // Apply filter
                    if (searchInput) {
                        searchInput.value = e.target.value;
                        filterAndRender(e.target.value.toLowerCase(), currentCategory);
                    }
                } else {
                    // Redirect to red.html with search param
                    window.location.href = `red.html?search=${encodeURIComponent(e.target.value)}`;
                }
            }
        });
    }

    // Grid Filters with Debounce
    let searchTimeout;
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                filterAndRender(e.target.value.toLowerCase(), currentCategory);
            }, 250);
        });
    }

    if (filterButtons) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Use data-category (always English) instead of visible text which changes with language
                currentCategory = e.target.dataset.category || e.target.innerText;

                // UI Update: Toggle active class
                filterButtons.forEach(b => b.classList.remove('active-filter'));
                e.target.classList.add('active-filter');

                const filterValue = currentCategory === 'All' ? '' : currentCategory;
                filterAndRender(searchInput ? searchInput.value.toLowerCase() : '', filterValue);
            });
        });
    }

    // Init
    if (grid) {
        renderGames(games);
    }
    updateCartUI();

    // Check for auto-open cart or search (e.g., from plus.html)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('openCart') === 'true') {
        setTimeout(toggleCart, 500);
    }
    const searchQuery = urlParams.get('search');
    if (searchQuery && grid) {
        setTimeout(() => {
            document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
            if (searchInput) {
                searchInput.value = searchQuery;
                filterAndRender(searchQuery.toLowerCase(), currentCategory);
            }
        }, 300);
    }

    // Scroll Reveal Animation (restoring from previous step)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-title, .hero-content, .support-card, .flash-sale-card').forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });

    // Nav Link Active State Manager
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove active from all
            navLinks.forEach(l => l.classList.remove('active'));
            // Add to clicked
            this.classList.add('active');
        });
    });

    // Add class for visible state dynamically
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .visible { opacity: 1 !important; transform: translateY(0) !important; }
    `;
    document.head.appendChild(styleSheet);

    // Checkout
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', async () => {
            const user = getCurrentUser();
            const token = localStorage.getItem('token');

            if (!user || !token) {
                showToast('Please log in to complete your purchase.', true);
                openModal(loginModal);
                return;
            }

            if (cart.length === 0) {
                showToast('Your cart is empty!', true);
                return;
            }

            // Calculate total
            const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0), 0);

            // Prepare order items
            const orderItems = cart.map(item => ({
                gameId: item.id,
                title: item.title,
                price: item.price || 0,
                variant: item.variant || 'Standard'
            }));

            try {
                const order = await api.post('/orders', {
                    orderItems,
                    totalPrice
                });

                const orderIdShort = order && order.id ? order.id.substring(0, 8) : 'NEW';
                showToast(`Order placed successfully! Order ID: ${orderIdShort}... Redirecting to WhatsApp to complete your payment.`);

                // Build WhatsApp message
                let waMessage = `مرحباً، أريد إتمام عملية الشراء لطلبي (رقم الطلب: ${orderIdShort})\n\nالطلب عبارة عن:\n`;
                orderItems.forEach((item, idx) => {
                    waMessage += `${idx + 1}. ${item.title} - ${item.variant} - ${item.price} EGP\n`;
                });
                waMessage += `\nالإجمالي: ${totalPrice} EGP`;

                const waLink = `https://wa.me/201140546818?text=${encodeURIComponent(waMessage)}`;

                // Clear cart
                cart = [];
                updateCartUI();
                if (typeof toggleCart === 'function') toggleCart();

                // Redirect to WhatsApp
                setTimeout(() => {
                    window.location.href = waLink;
                }, 1500);
            } catch (error) {
                showToast(error.message || 'Failed to place order. Please try again.', true);
            }
        });
    }

    /* ----------------------------------------------------
       SOUND MOOD SYSTEM
       ---------------------------------------------------- */
    const soundToggle = document.getElementById('sound-toggle');
    let soundEnabled = false;

    // Sound Assets (More reliable CDN links)
    const sounds = {
        click: new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'), // Clean click
        hover: new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3')  // Subtle blip
    };

    // Configure sounds
    Object.values(sounds).forEach(s => {
        s.volume = 0.5; // Set to maximum (100%)
        s.preload = 'auto';
        s.load(); // Force load
    });

    window.playSoundInternal = (type) => {
        if (!soundEnabled) return;
        const s = sounds[type];
        if (s) {
            s.currentTime = 0;
            s.play().catch(err => console.warn('Audio play failed:', err));
        }
    }

    if (soundToggle) {
        soundToggle.addEventListener('click', () => {
            soundEnabled = !soundEnabled;
            soundToggle.classList.toggle('sound-active', soundEnabled);

            // Update UI State & Icons
            const icon = soundToggle.querySelector('i');
            if (soundEnabled) {
                icon.className = 'fas fa-headphones';
                soundToggle.title = 'Sound Mood: On';
                if (window.playSoundInternal) window.playSoundInternal('click'); // User feedback
            } else {
                icon.className = 'fas fa-volume-mute';
                soundToggle.title = 'Sound Mood: Off';
            }
        });
    }

    // Interaction Sounds via Event Delegation
    document.addEventListener('click', (e) => {
        const target = e.target.closest('.cta-btn, .game-card, .icon-btn, .style-option, .nav-links a, .add-cart-btn, .wishlist-btn');
        if (target && target.id !== 'sound-toggle') {
            if (window.playSoundInternal) window.playSoundInternal('click');
        }
    });

    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('.cta-btn, .game-card, .icon-btn, .style-option, .nav-links a, .add-cart-btn, .wishlist-btn');
        if (target && target.id !== 'sound-toggle') {
            // Use a small cooldown or check if it's a new hover to avoid sound spam
            if (e.target === target || target.contains(e.target)) {
                // Optimization: only play if entering a new interactive element
                if (target !== window._lastHovered) {
                    if (window.playSoundInternal) window.playSoundInternal('hover');
                    window._lastHovered = target;
                }
            }
        }
    });

    document.addEventListener('mouseout', (e) => {
        const target = e.target.closest('.cta-btn, .game-card, .icon-btn, .style-option, .nav-links a, .add-cart-btn, .wishlist-btn');
        if (target === window._lastHovered) {
            window._lastHovered = null;
        }
    });

    // Initial Load
    if (grid) {
        const term = searchInput ? searchInput.value.toLowerCase() : '';
        filterAndRender(term, currentCategory);
    }
    loadGamesFromServer();
});
