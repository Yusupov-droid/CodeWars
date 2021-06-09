#include <iostream>
#include <vector>
#include <algorithm>

class Kata
{
public:
    std::vector<std::string> towerBuilder(int nFloors)
    {

        const int blocks = (nFloors * 2) - 1;

        std::vector<std::string> tower;

        for (int currentFloor = 0; currentFloor < nFloors; currentFloor++)
        {
            std::string floor;

            for (int currentBlock = 0; currentBlock < blocks; currentBlock++)
            {
                if (currentBlock < currentFloor || currentBlock >= blocks - currentFloor)
                {
                    floor.push_back(' ');
                }
                else
                {
                    floor.push_back('*');
                }
            }
            tower.push_back(floor);
        }
        std::reverse(tower.begin(), tower.end());

        return tower;
    }
};