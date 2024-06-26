// Животное
public interface IAnimal
{
    void Eat();
}

// Трав аб
public abstract class Herbivore : IAnimal
{
    public string Name { get; set; }
    public abstract void Eat();
}

// Хищ аб
public abstract class Carnivore : IAnimal
{
    public string Name { get; set; }
    public abstract void Eat();
}

// Всеяд аб
public abstract class Omnivore : IAnimal
{
    public string Name { get; set; }
    public abstract void Eat();
}

// Бельчонок
public class Squirrel : Herbivore
{
    public override void Eat()
    {
        Console.WriteLine($"{Name} is eating plants.");
    }
}

// Кот
public class Cat : Carnivore
{
    public override void Eat()
    {
        Console.WriteLine($"{Name} is eating meat.");
    }
}

// Тигра
public class Tiger : Carnivore
{
    public override void Eat()
    {
        Console.WriteLine($"{Name} is eating meat.");
    }
}

// Собака
public class Dog : Omnivore
{
    public override void Eat()
    {
        Console.WriteLine($"{Name} is eating.");
    }
}

// Воробей
public class Sparrow : Herbivore
{
    public override void Eat()
    {
        Console.WriteLine($"{Name} is eating plants.");
    }
}

class Program {
    public static void Main(string[] args) {
        new Sparrow { Name = "sparrow" }.Eat();
        new Dog { Name = "dog" }.Eat();
        new Tiger { Name = "tiger" }.Eat();
        new Cat { Name = "cat" }.Eat();
    }
}