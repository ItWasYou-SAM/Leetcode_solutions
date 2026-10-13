class Solution {

    public double myPow(double x, int n) {
        long N = Math.abs((long) n);

        double ans = recursion(x, N);
        return n < 0 ? 1 / ans : ans;
    }

    public double recursion(double x, long n) {
        if (n == 0) {
            return 1;
        }
        double temp = recursion(x, n / 2);

        if (n % 2 == 0) {
            return temp * temp;

        } else {
            return x * temp * temp;
        }
    }
}