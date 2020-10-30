import unittest
from reverse_words import reverse_words

class Test(unittest.TestCase):
    def test_reverses_words_one_space(self):
        message = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
        reverse_words(message)

        expected = ['w', 'o', 'r', 'l', 'd', ' ', 'h', 'e', 'l', 'l', 'o']

        self.assertEqual(message, expected)

    def test_reverses_words_three_spaces(self):
        message = ['h', 'i', ' ', 'i', 'm', ' ', 'j', 'a', 'c', 'k']
        reverse_words(message)

        expected = ['j', 'a', 'c', 'k', ' ', 'i', 'm', ' ', 'h', 'i']

        self.assertEqual(message, expected)

    def test_one_word_no_space(self):
        message = ['t', 'e', 's', 't', 'i', 'n', 'g']

        reverse_words(message)
        expected = ['t', 'e', 's', 't', 'i', 'n', 'g']

        self.assertEqual(message, expected)

if __name__ == "__main__":
    unittest.main()
