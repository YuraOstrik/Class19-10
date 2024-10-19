namespace Class______14._10Home
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            City city = new City();
            city.Input();
            Console.WriteLine("---------");
            city.Display();

            Console.WriteLine("");
            Console.WriteLine("////////////");
            Console.WriteLine("");

            Employee employee = new Employee();
            employee.In();
            employee.Out();

            Console.WriteLine("");
            Console.WriteLine("////////////");
            Console.WriteLine("");

            Plane airplane = new Plane("Boeing 747", "Boeing", 2000, "Пассажирский");
            airplane.SetType(" Bussss ");
            airplane.DisplayData();
        }

        class Plane
        {
            string name;
            string manuf;
            int year;
            string type;
            

            public Plane()
            {
                name = "";
                manuf = "";
                year = 0;
                type = "";
            }

            public Plane(string name, string manuf, int year, string type)
            {
                this.name = name;
                this.manuf = manuf;
                this.type = type;
                this.year = year;
            }

            public void SetType(string type)
            {
                this.type = type;
            }

            public string GetType()
            {
                return type;
            }
            public void DisplayData()
            {
                Console.WriteLine("Название самолёта: " + name);
                Console.WriteLine("Производитель: " + manuf);
                Console.WriteLine("Год выпуска: " + year);
                Console.WriteLine("Тип самолёта: " + type);
            }
        }
        class Employee
        {
            string name;
            int data;
            int col;
            string email;
            string job;
            private string description;

            public void In()
            {
                Console.WriteLine("Имя ");
                name = Console.ReadLine();
                Console.WriteLine("Число ");
                data = int.Parse(Console.ReadLine());

                Console.WriteLine("Телефон ");
                col = int.Parse(Console.ReadLine());
                Console.WriteLine("Email ");
                email = Console.ReadLine();

                Console.WriteLine("РАбота ");
                job = Console.ReadLine();
                Console.WriteLine("Описание ");
                description = Console.ReadLine();
            }

            public void Out()
            {
                Console.WriteLine($"$ {name}" +
                    $"\t, {data} " +
                    $"\t, {col} " +
                    $"\t, {email}" +
                    $"\t, {job}" +
                    $"\t, {description}");
            }
            public string GetDes()
            {
                return description;
            }
        }


        class City
        {
            private string name;
            private string country;
            private int population;
            private string phone;

            public void Input()
            {
                Console.WriteLine("Название города");
                name = Console.ReadLine();

                Console.WriteLine("Название страны ");
                country = Console.ReadLine();

                Console.WriteLine("Кол-во жителей ");
                population = int.Parse(Console.ReadLine());

                Console.Write("Введите телефонный код: ");
                phone = Console.ReadLine();

            }

            public void Display()
            {
                Console.WriteLine($"Город: {name}");
                Console.WriteLine($"Страна: {country}");
                Console.WriteLine($"Количество жителей: {population}");
                Console.WriteLine($"Телефонный код: {phone}");
            }

            public string GetCity()
            {
                return name;
            }

            public string GetCountry()
            {
                return country;
            }

            public int GetPopulation()
            {
                return population;
            }

            public string GetPhone()
            {
                return phone;
            }

        }
    }
}
