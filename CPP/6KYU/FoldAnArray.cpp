#include <vector>
class Kata
{
public:
    std::vector<int> foldArray(std::vector<int> array, int runs)
    {
        for (int i{0}; i < runs; ++i)
        {
            for (size_t i{0}; i < array.size() - 1; ++i)
            {
                array[i] += array.back();
                array.pop_back();
            }
        }
        return array;
    }
};