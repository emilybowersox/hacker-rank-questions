import java.util.ArrayList;
import java.util.List;

public class LoopsTwo {


    static int simpleArraySum(int[] ar) {
        int length = ar.length;
        int sum = 0;
        for (int i = 0; i < length; i++) {
            sum += ar[i];
        }
        return sum;
    }


//CompareTriplets

    static List<Integer> compareTriplets(List<Integer> a, List<Integer> b) {
        int alicePoints = 0;
        int bobPoints = 0;

        for (int i = 0; i <= 2; i++)
            if (a.get(i) > b.get(i)) {
                alicePoints += 1;
            } else if (b.get(i) > a.get(i)) {
                bobPoints += 1;
            } else {
                continue;
            }
        List<Integer> scores = new ArrayList<Integer>();
        scores.add(alicePoints);
        scores.add(bobPoints);
        return scores;
    }


//aVeryBigSum

    static long aVeryBigSum(long[] ar) {
        long n = ar.length;
        long sum = 0;
        for (int i = 0; i < n; i++) {
            sum += ar[i];
        }
        return sum;
    }


//Java loops 2

//    static int javaLoopsTwo(int a, int b, int n) {
//        List<Integer> terms = new ArrayList<Integer>();
//        int sum = a;
//        for (int i = 0; i < n; i++) {
//
//            Math.power()
//
//        }
//
//
//        return a +
//
//    }


}
