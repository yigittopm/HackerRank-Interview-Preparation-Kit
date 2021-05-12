#include <bits/stdc++.h>

using namespace std;

// Complete the repeatedString function below.
// abaabaabaa -7
long repeatedString(string s, long n) {
    long a=0;
    int size_one=0;
    
    // s string include how s[0] --> 2
    for(int i=0; i<s.size(); i++){
        if('a' == s[i]){
            ++size_one;
        }
    }
    
    long tam = n / s.size(); // 3
    long kalan = n % s.size(); // 1
    
    a = size_one * tam;
    
    for(int j=0; j<kalan; j++){
        if('a' == s[j]){
            ++a;
        }
    }
    
    return a; 
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string s;
    getline(cin, s);

    long n;
    cin >> n;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    long result = repeatedString(s, n);

    fout << result << "\n";

    fout.close();

    return 0;
}
