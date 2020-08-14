import java.util.Scanner;

public class OutputFormatting {
    private static String blankSpaces (String formatString) {
        int length = formatString.length();
        if (length >= 15) {
            return formatString;
        } else {
            StringBuilder sb = new StringBuilder();
            sb.append(formatString);
            while (sb.length() < 15) {
                sb.append(" ");
            }
            return sb.toString();
        }
    }

    private static String aZero (int param) {
        String.valueOf(param);
        int b = String.valueOf(param).length();
        if (b < 2 ){
            return "00";
        } else if (b < 3){
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

            System.out.printf(blankSpaces(s1)+ aZero(x) + x + '\n');
        }
        System.out.println("================================");

    }
}



