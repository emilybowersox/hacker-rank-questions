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

        double av = sum / testScores.length;

        if (av <= 100 && av >= 90) {
            return "O";
        } else if (av < 90 && av >= 80) {
            return "E";
        } else if (av < 80 && av >= 70) {
            return "A";
        } else if (av < 70 && av >= 55) {
            return "P";
        } else if (av < 55 && av >= 40) {
            return "D";
        } else {
            return "T";
        }
    }
}

//}
