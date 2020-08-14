import java.util.Scanner;

public class OutputFormatting {
    private static String blankSpaces (String spaces) {
        return "     ";
    }

    private static String aZero (int param) {
        String.valueOf(param);
        String d = "0";
        int b = String.valueOf(param).length();
        if (b < 3 ){
            return "0";
        } else {
            return "";
        }
    }


    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("================================");

        for(int i=0;i<3;i++){
            String s1=sc.next();
            int x=sc.nextInt();

            // int c = Integer.toString(int d);

            System.out.printf(s1 + aZero(x) + x + '\n');
        }
        System.out.println("================================");

    }
}



