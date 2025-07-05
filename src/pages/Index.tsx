import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Building2" className="h-8 w-8 text-blue-600 mr-3" />
              <span className="text-2xl font-bold text-slate-800">
                СтройТех
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#projects"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Проекты
              </a>
              <a
                href="#services"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Строительство
              <br />
              <span className="text-blue-200">будущего</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Профессиональное коммерческое строительство офисов и складов с
              использованием передовых технологий
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Получить консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Посмотреть проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Сроки</h3>
              <p className="text-slate-600">
                Строго соблюдаем договорные сроки и выполняем работы в
                установленные временные рамки
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-slate-600">
                Используем только проверенные материалы и современные технологии
                строительства
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Опыт</h3>
              <p className="text-slate-600">
                15+ лет на рынке коммерческого строительства, 200+ успешно
                реализованных проектов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Наши проекты
            </h2>
            <p className="text-xl text-slate-600">
              Реализованные объекты коммерческого строительства
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("/img/1fddffa4-f2ce-48b8-94be-7061587af0ad.jpg")',
                }}
              ></div>
              <CardHeader>
                <CardTitle>Офисный центр "Технопарк"</CardTitle>
                <CardDescription>
                  Современный офисный комплекс площадью 15,000 м²
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Офисы</Badge>
                  <Badge variant="secondary">15,000 м²</Badge>
                  <Badge variant="secondary">2023</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="Eye" className="mr-2 h-4 w-4" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("/img/8acbb62c-dfcc-4952-aed7-5c07d1a150a3.jpg")',
                }}
              ></div>
              <CardHeader>
                <CardTitle>Логистический центр "Авангард"</CardTitle>
                <CardDescription>
                  Складской комплекс с автоматизированными системами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Склады</Badge>
                  <Badge variant="secondary">25,000 м²</Badge>
                  <Badge variant="secondary">2022</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="Eye" className="mr-2 h-4 w-4" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("/img/26421b5d-2191-4c0f-ba45-f58773da0aad.jpg")',
                }}
              ></div>
              <CardHeader>
                <CardTitle>Производственный комплекс</CardTitle>
                <CardDescription>
                  Многофункциональный производственный объект
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Производство</Badge>
                  <Badge variant="secondary">30,000 м²</Badge>
                  <Badge variant="secondary">2024</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="Eye" className="mr-2 h-4 w-4" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Услуги</h2>
            <p className="text-xl text-slate-600">
              Полный спектр услуг коммерческого строительства
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Icon
                    name="Building2"
                    className="h-8 w-8 text-blue-600 mr-3"
                  />
                  <CardTitle>Офисные здания</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Строительство современных офисных центров с учетом всех
                  требований энергоэффективности и комфорта
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-600 mr-2"
                    />
                    Проектирование и строительство
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-600 mr-2"
                    />
                    Системы кондиционирования
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-600 mr-2"
                    />
                    Инженерные коммуникации
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Icon
                    name="Warehouse"
                    className="h-8 w-8 text-blue-600 mr-3"
                  />
                  <CardTitle>Складские комплексы</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Проектирование и строительство логистических центров и
                  складских помещений любой сложности
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-600 mr-2"
                    />
                    Автоматизированные системы
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-600 mr-2"
                    />
                    Температурные режимы
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="h-4 w-4 text-green-600 mr-2"
                    />
                    Системы безопасности
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                О компании
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                СтройТех — ведущая компания в области коммерческого
                строительства с 15-летним опытом работы. Мы специализируемся на
                создании современных офисных и складских комплексов, используя
                передовые технологии и материалы.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    200+
                  </div>
                  <div className="text-slate-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    15+
                  </div>
                  <div className="text-slate-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    1M+
                  </div>
                  <div className="text-slate-600">м² построено</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    100%
                  </div>
                  <div className="text-slate-600">Качество</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 flex items-center justify-center">
              <Icon name="Users" className="h-32 w-32 text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Контакты</h2>
            <p className="text-xl text-slate-600">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-slate-600">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-600">info@stroytech.ru</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-slate-600">
                      Москва, ул. Строителей, 15
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Написать нам</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Input placeholder="Телефон" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={4} />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Icon name="Building2" className="h-8 w-8 text-blue-400 mr-3" />
              <span className="text-2xl font-bold">СтройТех</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400">
                © 2024 СтройТех. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
