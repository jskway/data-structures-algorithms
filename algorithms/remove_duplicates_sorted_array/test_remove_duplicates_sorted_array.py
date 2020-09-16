import unittest
from remove_duplicates_sorted_array import remove_duplicates

class Test(unittest.TestCase):
  nums = [1, 1, 2]
  nums_2 = [0,0,1,1,1,2,2,3,3,4]

  def test_removes_duplicates_1(self):
      actual = remove_duplicates(self.nums)
      expected = 2
      self.assertEqual(actual, expected)

  def test_removes_duplicates_2(self):
      actual = remove_duplicates(self.nums_2)
      expected = 5
      self.assertEqual(actual, expected)

if __name__ == "__main__":
    unittest.main()
