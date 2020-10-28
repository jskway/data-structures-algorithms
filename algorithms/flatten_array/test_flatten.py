import unittest
from flatten import flatten

class Test(unittest.TestCase):
    def test_nested_array(self):
        exampleArray = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];
        expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        actual = flatten(exampleArray);

        self.assertEqual(actual, expected)

    def test_flat_array(self):
        exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        actual = flatten(exampleArray);

        self.assertEqual(actual, expected)

if __name__ == '__main__':
    unittest.main()

