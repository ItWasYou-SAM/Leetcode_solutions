class Solution {
    public String removeDuplicates(String s) {
        StringBuilder res = new StringBuilder();
        Stack<Character> st = new Stack<>();

        for (int j = 0; j < s.length(); j++) {
            char c = s.charAt(j);

            if (!st.isEmpty() && st.peek() == c) {
                st.pop();               
            } else {
                st.push(c);           
            }
        }

        while (!st.isEmpty()) res.append(st.pop());

        return res.reverse().toString();
    }
}