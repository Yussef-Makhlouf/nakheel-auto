import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Facilities() {
  return (
    <section id="facilities" className="relative bg-[#F1F5F9] py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#EAB308]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0A2F5D]/10 rounded-full blur-3xl"></div>
      
      <div className="container relative">
        <div className="mb-12 text-center relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#EAB308] rounded-full"></div>
          <h2 className="mb-2 text-3xl font-bold text-[#0A2F5D]">المرافق والخدمات</h2>
          <p className="text-xl text-[#0A2F5D]/80">Facilities and Services</p>
        </div>

        <Tabs defaultValue="spaces" className="w-full">
          <TabsList className="mx-auto mb-8 grid w-full max-w-2xl grid-cols-3 gap-2 p-1 bg-[#0A2F5D]/5 rounded-xl">
            <TabsTrigger 
              value="spaces" 
              className="text-sm md:text-base data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all duration-300"
            >
              <span className="block font-medium">المساحات </span>
              {/* <span className="text-xs text-[#0A2F5D]/70">Spaces & Offices</span> */}
            </TabsTrigger>
            <TabsTrigger 
              value="infrastructure" 
              className="text-sm md:text-base data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all duration-300"
            >
              <span className="block font-medium">البنية التحتية</span>
              {/* <span className="text-xs text-[#0A2F5D]/70">Infrastructure</span> */}
            </TabsTrigger>
            <TabsTrigger 
              value="security" 
              className="text-sm md:text-base data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all duration-300"
            >
              <span className="block font-medium">الأمن والسلامة</span>
              {/* <span className="text-xs text-[#0A2F5D]/70">Security & Safety</span> */}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="spaces" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="مساحات المكاتب والورش"
                  width={700}
                  height={500}
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="text-2xl font-bold text-[#0A2F5D]">
                  مساحات مكتبية وتشغيلية متكاملة
                  <br />
                  <span className="text-lg font-medium text-[#0A2F5D]/70">
                    Integrated Office and Operational Spaces
                  </span>
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="mt-1 rounded-full bg-[#16A34A] p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        وحدات مكتبية خاصة بكل وحدة ومزودة بكافة المرافق الخاصة اللازمة للحصول على بيئة عمل متكاملة
                        ومثالية واقتصادية.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Office units for each unit equipped with all necessary facilities to obtain an integrated,
                        ideal and economical work environment.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="mt-1 rounded-full bg-[#16A34A] p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        مساحات تشغيلية واسعة تناسب مختلف أنواع أنشطة صيانة السيارات (ميكانيكية، كهربائية، سمكرة،
                        دهان).
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Large operational spaces suitable for various types of car maintenance activities
                        (mechanical, electrical, body work, painting).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="mt-1 rounded-full bg-[#16A34A] p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        مواقف سيارات وشاحنات كبيرة وصغيرة، مع تخصيص مساحات كافية لكل وحدة مخصصة كمواقف سيارات.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Parking for cars and large and small trucks, with sufficient spaces allocated for each unit
                        designated as parking lots.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="infrastructure" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="order-2 flex flex-col justify-center md:order-1">
                <h3 className="text-2xl font-bold text-[#0A2F5D] mb-6">
                  بنية تحتية متكاملة
                  <br />
                  <span className="text-lg font-medium text-[#0A2F5D]/70">Integrated Infrastructure</span>
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="mt-1 rounded-full bg-[#16A34A] p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        شبكة كهرباء متطورة تلبي احتياجات جميع أنواع المعدات والأجهزة المستخدمة في ورش صيانة
                        السيارات.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Advanced electricity network that meets the needs of all types of equipment and devices used
                        in car maintenance workshops.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="mt-1 rounded-full bg-[#16A34A] p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">شبكة مياه وصرف صحي متكاملة تضمن بيئة عمل نظيفة وصحية.</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Integrated water and sewage network that ensures a clean and healthy work environment.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="mt-1 rounded-full bg-[#16A34A] p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        نظام صرف صناعي متخصص يتوافق مع المعايير البيئية للتخلص الآمن من مخلفات صيانة السيارات.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Specialized industrial drainage system that complies with environmental standards for the
                        safe disposal of car maintenance waste.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 overflow-hidden rounded-2xl shadow-lg md:order-2">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="البنية التحتية للمجمع"
                  width={700}
                  height={500}
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="أنظمة الأمن والسلامة"
                  width={700}
                  height={500}
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="text-2xl font-bold text-[#0A2F5D]">
                  أنظمة أمنية متطورة
                  <br />
                  <span className="text-lg font-medium text-[#0A2F5D]/70">Advanced Security Systems</span>
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="mt-1 rounded-full bg-[#16A34A] p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        توفير الحراسات والأنظمة الأمنية على مدار الساعة لضمان بيئة عمل آمنة.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Providing 24-hour security guards and systems to ensure a safe work environment.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="mt-1 rounded-full bg-[#16A34A] p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">كاميرات مراقبة متطورة لمراقبة وتأمين المجمع من جميع الجهات.</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Advanced surveillance cameras to monitor and secure the complex from all sides.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <div className="mt-1 rounded-full bg-[#16A34A] p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        تركيب كافة تجهيزات وأنظمة مكافحة الحريق بأعلى المواصفات الهندسية.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Installation of all firefighting equipment and systems with the highest engineering
                        specifications.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16">
          <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0A2F5D] to-[#0A2F5D]/90 p-8 text-white shadow-lg">
            <div className="absolute right-0 top-0 h-full w-32 opacity-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-full w-full"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
            <div className="relative flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-white/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold">موقع المجمع</h3>
                  <p className="text-sm text-white/80">موقع استراتيجي يسهل الوصول إليه</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-white/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold">المساحة الإجمالية</h3>
                  <p className="text-sm text-white/80">مساحات واسعة ومتكاملة</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-white/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="text-right">
                  <h3 className="text-xl font-bold">الأمان والسلامة</h3>
                  <p className="text-sm text-white/80">أنظمة أمنية متطورة</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="مخطط المجمع"
              width={1200}
              height={600}
              className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 