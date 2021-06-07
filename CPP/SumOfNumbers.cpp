int get_sum(int a, int b)
{
	if (a == b)
	{
		return a;
	}
	if (a > b)
	{
		int temp = a;
		a = b;
		b = temp;
	}
	int summ = 0;
	for (int i = a; i <= b; i++)
	{
		summ += i;
	}
	return summ;
}