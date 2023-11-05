
using System;

public class Solution
{
    public int GetLastMoment(int plankLength, int[] leftDirection, int[] rightDirection)
    {
        int lastMomentWhenAllAntsFallOut = 0;

        foreach (int position in leftDirection)
        {
            lastMomentWhenAllAntsFallOut = Math.Max(lastMomentWhenAllAntsFallOut, position);
        }
        foreach (int position in rightDirection)
        {
            lastMomentWhenAllAntsFallOut = Math.Max(lastMomentWhenAllAntsFallOut, plankLength - position);
        }

        return lastMomentWhenAllAntsFallOut;
    }
}
