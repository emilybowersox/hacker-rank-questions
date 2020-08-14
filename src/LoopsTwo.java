public class LoopsTwo {


    static int simpleArraySum(int[] ar) {
        int length = ar.length;
        int sum = 0;
        for (int i = 0; i < length; i++) {
            sum += ar[i];
        }
        return sum;
    }


}
