import java.util.Scanner;

public class JavaIntro {
    //Solution
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int i = scan.nextInt();
        double d = scan.nextDouble();
        scan.nextLine();
        String s = scan.nextLine();


        System.out.println("String: " + s);
        System.out.println("Double: " + d);
        System.out.println("Int: " + i);
    }


    //Datatypes
//    Scanner sc = new Scanner(System.in);
//    int t=sc.nextInt();
//
//        for(int i=0;i<t;i++)
//    {
//        try
//        {
//            long x=sc.nextLong();
//            System.out.println(x+" can be fitted in:");
//            if(x>=-128 && x<=127)System.out.println("* byte");
//            if(x>=-32768 && x<=32767)System.out.println("* short");
//            if(x>=Math.pow(-2, 31) && x<= Math.pow(2, 31))System.out.println("* int");
//            if(x>=Math.pow(-2, 63) && x<= Math.pow(2, 63))System.out.println("* long");
//        }
//        catch(Exception e)
//        {
//            System.out.println(sc.next()+" can't be fitted anywhere.");
//        }
//    }



    // Java Int to String
//    String s = Integer.toString(n);
}




