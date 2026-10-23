class Solution {
    public boolean isAcronym(List<String> words, String s) {
        if(words.size() != s.length()){
            return false;
        }
        int n= words.size();
        int c=0;
        StringBuilder sb = new StringBuilder();
        for(String word: words){
            if(word.charAt(0)!= s.charAt(c)){
                return false;
            }
            c++;
        }
        return true;
    }
}