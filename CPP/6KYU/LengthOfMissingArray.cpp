#include <iostream>
#include <algorithm>
#include <vector>


template <class TYPE>
int getLengthOfMissingArray(std::vector<std::vector<TYPE>> arrayOfArrays)
{

    if (arrayOfArrays.empty())
        return 0;

    std::sort(arrayOfArrays.begin(), arrayOfArrays.end() , [](std::vector<TYPE> a, std::vector<TYPE> b) {
        return a.size() < b.size();
    });

    for (size_t i = 0; i < arrayOfArrays.size(); i++)
    {

        if (arrayOfArrays[i].size() == 0)
        {
            return 0;
        }
        if ((arrayOfArrays[i + 1].size() - arrayOfArrays[i].size()) == 1)
        {
            continue;
        }
        else
        {
            return arrayOfArrays[i].size() + 1;
        }
    }

    return 0;
}