namespace Class______14._10Home
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            City city1 = new City();
            city1.Input();
            Console.WriteLine("---------");

            City city2 = new City();
            city2.Input();
            Console.WriteLine("---------");

            if(city1 == city2)
            {
                Console.WriteLine("Good");
            }
            else
            {
                Console.WriteLine("Not good");
            }

            Console.WriteLine("");
            Console.WriteLine("////////////");
            Console.WriteLine("");

            Employee employee1 = new Employee();
            employee1.In();
            employee1.Out();

            employee1 += 500;
            employee1.Out();

            Console.WriteLine("");
            Console.WriteLine("////////////");
            Console.WriteLine("");


            
        }

        
        class Employee
        {
            string name;
            int data;
            int col;
            int money;
            string email;
            string job;
            private string description;

            public void In()
            {
                Console.WriteLine("Имя ");
                name = Console.ReadLine();
                Console.WriteLine("Число ");
                data = int.Parse(Console.ReadLine());

                Console.WriteLine("Заработок ");
                money = int.Parse(Console.ReadLine());
                Console.WriteLine("Телефон ");
                col = int.Parse(Console.ReadLine());
                Console.WriteLine("Email ");
                email = Console.ReadLine();

                Console.WriteLine("РАбота ");
                job = Console.ReadLine();
                Console.WriteLine("Описание ");
                description = Console.ReadLine();
            }

            public static Employee operator +(Employee a, int b)
            {
                a.money += b;
                return a;
            }
            public static Employee operator -(Employee a, int b)
            {
                a.money -= b;
                return a;
            }
            public static bool operator ==(Employee a, Employee b)
            {
                return a.money == b.money;
            }
            public static bool operator !=(Employee a, Employee b)
            {
                return a.money != b.money;
            }
            public static bool operator <(Employee a, Employee b)
            {
                return a.money < b.money;
            }
            public static bool operator >(Employee a, Employee b)
            {
                return a.money > b.money;
            }
            
            public void Out()
            {
                Console.WriteLine($"$ {name}" +
                    $"\t, {data} " +
                    $"\t, {col} " +
                    $"\t, {money} " +
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
            public static City operator +(City a, int b)
            {
                a.population += b;
                return a;
            }
            public static City operator -(City a, int b)
            {
                a.population -= b;
                return a;
            }
            public static bool operator ==(City a, City b)
            {
                return a.population == b.population;
            }
            public static bool operator !=(City a, City b)
            {
                return a.population != b.population ;
            }
            public static bool operator <(City a, City b)
            {
                return a.population < b.population;
            }
            public static bool operator >(City a, City b)
            {
                return a.population > b.population;
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
