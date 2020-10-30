# Helper function that will reverse a list of characters in-place
def reverse_chars(word, left_idx, right_idx):

  # Walks toward the middle, from both sides
  while left_idx < right_idx:
      word[left_idx], word[right_idx] = word[right_idx], word[left_idx]
      left_idx += 1
      right_idx -= 1

def reverse_words(message):
    # Reverse the entire message
    reverse_chars(message, 0, len(message) - 1)

    # Now we need to re-reverse each individual word

    # Track the start of each word
    word_start_idx = 0

    # Iterate through each character
    for i in range(len(message) + 1):
        # If we reach the end of the message or end of a word 
        if (i == len(message)) or (message[i] == ' '):
            # reverse the word
            reverse_chars(message, word_start_idx, i - 1)

            # Set the word_start_idx to the start of the next word
            word_start_idx = i + 1



