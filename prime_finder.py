#!/usr/bin/env python3
"""CLI program that computes and prints all prime numbers up to a user-specified integer.

Usage:
    python3 prime_finder.py
"""


def is_prime(n):
    """Return True if n is prime, False otherwise."""
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    return True


def primes_up_to(limit):
    """Return a list of all prime numbers from 0 to limit (inclusive)."""
    return [n for n in range(limit + 1) if is_prime(n)]


def main():
    while True:
        user_input = input("Enter a positive integer: ")
        try:
            number = int(user_input)
        except ValueError:
            print("Error: Please enter a valid integer.")
            continue

        if number <= 0:
            print("Error: Please enter a positive integer greater than zero.")
            continue

        break

    primes = primes_up_to(number)
    print(", ".join(map(str, primes)))


if __name__ == "__main__":
    main()
