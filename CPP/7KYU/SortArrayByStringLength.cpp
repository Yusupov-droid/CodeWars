#include <iostream>
#include <vector>

class Kata
{
public:
    std::vector<std::string> sortByLength(std::vector<std::string> array)
    {
        for (int startIndex = 0; startIndex < array.size() - 1; ++startIndex)
        {

            int smallestIndex = startIndex;

            for (int currentIndex = startIndex + 1; currentIndex < array.size(); ++currentIndex)
            {
                if (array[currentIndex].size() < array[smallestIndex].size())
                    smallestIndex = currentIndex;
            }

            std::swap(array[startIndex], array[smallestIndex]);
        }

        return array;
    }
};