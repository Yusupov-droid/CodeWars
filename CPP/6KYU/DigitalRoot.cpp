#include <string>

int digital_root(int n)
{
    
    int summ = 0;
    std::string number = std::to_string(n);

    for (size_t i = 0; i < number.length(); i++)
    {
        summ += number[i] - '0';
    }
    return summ >= 10 ? digital_root(summ): summ;
}
