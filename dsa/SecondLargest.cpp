#include <iostream>
#include <vector>
using namespace std;
int secondLargest(vector<int> &arr, int n)
{
    int largest = arr[0];
    int secondlargest = arr[1];
     for (int i = 2; i < n; i++)
    {
        if (arr[i] > largest)
        {
            largest = arr[i];
            secondlargest = largest;
        }
    }
    return secondlargest;
}

int main()
{
    vector<int> arr1 = {2, 5, 1, 3, 0};

    vector<int> arr2 = {8, 10, 5, 7, 9};

    cout << "Second largest in arr1: " << secondLargest(arr1, arr1.size()) << endl;
    return 0;
}