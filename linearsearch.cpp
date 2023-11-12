// // #include<iostream>
// // using namespace std;

// // void update(int arr[], int n) {

// //     cout << endl << "Inside the function" <<endl;

// //     //updating array's first element
// //     arr[0] = 120;

// //     //printing the array
// //     for(int i=0; i<3; i++) {
// //         cout << arr[i] <<" ";
// //     } cout<<endl;

// //     cout << "Going back to main function" << endl;
// // }

// // int main() {

// //     int arr[3] = {1,2,3};

// //     update(arr, 3);

// //     //printing the array
// //     cout<< endl << "Printing in main function" << endl;
// //     for(int i=0; i<3; i++) {
// //         cout << arr[i] <<" ";
// //     }
// //     cout << endl;

// //     return 0;
// // }
// #include<iostream>
// using namespace std;

// void update(int arr[], int n) {

//     cout << endl << "Inside the function" <<endl;

//     //updating array's first element
//     arr[0] = 120;

//     //printing the array
//     for(int i=0; i<3; i++) {
//         cout << arr[i] <<" ";
//     } cout<<endl;

//     cout << "Going back to main function" << endl;
// }

// int main() {

//     int arr[3] = {1,2,3};

//     update(arr, 3);

//     //printing the array
//     cout<< endl << "Printing in main function" << endl;
//     for(int i=0; i<3; i++) {
//         cout << arr[i] <<" ";
//     }
//     cout << endl;

//     return 0;
// }
// #include<iostream>
// using namespace std;

// int getMin(int num[], int n) {

//     int mini = INT_MAX;

//     for(int i = 0; i<n; i++) {

//         mini = min( mini, num[i]);

//         //if(num[i] < min){
//         //    min = num[i];
//         //}
//     }

//     //returning min value
//     return mini;
// }

// int getMax(int num[], int n) {

//     int maxi = INT_MIN;

//     for(int i = 0; i<n; i++) {

//         maxi = max(maxi, num[i]);

//        // if(num[i] > max){
//          //   max = num[i];
//        // }
//     }

//     //returning max value
//     return maxi;
// }

// int main() {

//     int size;
//     cin >> size;

//     int num[100];

//     //taking input in array
//     for(int i = 0; i<size; i++) {
//         cin >> num[i];
//     }

//     cout << " Maximum value is " << getMax(num, size) << endl;
//     cout << " Minimum value is " << getMin(num, size) << endl;

//     return 0;
// }
// #include<iostream>
// using namespace std;

// void reverse(int arr[], int n) {

//     int start = 0;
//     int end = n-1;

//     while(start<=end) {
//         swap(arr[start], arr[end]);
//         start++;
//         end--;
//     }
// }

// void printArray(int arr[], int n) {

//     for(int i=0; i<n; i++) {
//         cout << arr[i] << " ";
//     }
//     cout << endl;
// }

// int main() {

//     int arr[6] = {1,4,0,5,-2,15};
//     int brr[5] = {2,6,3,9,4};

//     reverse(arr, 6);
//     reverse(brr, 5);

//     printArray(arr, 6);
//     printArray(brr, 5);

//     return 0;
// }
