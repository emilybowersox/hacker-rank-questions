//public class Inheritance {

class Student extends Person {
    private int[] testScores;

    //inheritance- calling superclass Person (the Parent class)
    //Student is a subclass/child of Person- inherits its properties and methods,
    // but can also add new properties and methods
    Student(String firstName, String lastName, int id, int[] scores) {
        super(firstName, lastName, id);
        this.testScores = scores;
    }


    public String calculate() {
        int sum = 0;
        for (int i : testScores)
            sum += i;
        return Integer.toString(sum);
    }
}

//}
