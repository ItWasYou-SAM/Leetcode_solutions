class Solution {
    public String digitSum(String s, int k) {
        return res(s, k);
    }

    private String res(String s, int k) {
        if (s == null || s.length() <= k) {
            return s;
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length(); i += k) {
            int sum = 0;
            int end = Math.min(i + k, s.length());
            
            for (int j = i; j < end; j++) {
                sum += s.charAt(j) - '0';
            }
            sb.append(sum);
        }
        return res(sb.toString(), k);
    }
}
