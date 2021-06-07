#include <string>
#include <vector>

std::string odd_or_even(const std::vector<int> &arr)
{
    int summ = 0;

    for (int n : arr)
    {
        summ += n;
    }
    return summ % 2 == 0 ? "even" : "odd";
}