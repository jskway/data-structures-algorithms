import unittest
from binary_search import *

class BinarySearchTest(unittest.TestCase):
    def test_binary_search(self):
        arr1 = [-9, -8, -6, -4, -3, -2, 0, 1, 2, 3, 5, 7, 8, 9]
        arr2 = []

        self.assertEqual(binary_search(arr1, -8), 1)
        self.assertEqual(binary_search(arr1, 0), 6)
        self.assertEqual(binary_search(arr2, 6), -1)
        self.assertEqual(binary_search(arr2, 0), -1)


if __name__ == '__main__':
    unittest.main()
