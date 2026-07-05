const quizQuestions = {
    java: [
        {
            question: "What is the entry point of a Java program?",
            options: ["main() method", "start() method", "begin() method", "init() method"],
            correct: 0
        },
        {
            question: "Which keyword is used to create a class in Java?",
            options: ["class", "Class", "CLASS", "clazz"],
            correct: 0
        },
        {
            question: "What is the default value of an integer variable in Java?",
            options: ["0", "null", "undefined", "-1"],
            correct: 0
        },
        {
            question: "Which of the following is NOT a Java access modifier?",
            options: ["protected", "private", "secret", "public"],
            correct: 2
        },
        {
            question: "What does 'new' keyword do in Java?",
            options: ["Creates a new variable", "Allocates memory for object", "Declares a variable", "None of the above"],
            correct: 1
        },
        {
            question: "Which collection type maintains insertion order?",
            options: ["HashSet", "HashMap", "LinkedList", "TreeSet"],
            correct: 2
        },
        {
            question: "What is the output of: System.out.println(5 + 3 + \"abc\");",
            options: ["8abc", "53abc", "5+3abc", "abc8"],
            correct: 0
        },
        {
            question: "Can you override a private method in Java?",
            options: ["Yes", "No", "Only in interfaces", "Only in abstract classes"],
            correct: 1
        },
        {
            question: "What is the purpose of 'final' keyword in Java?",
            options: ["Makes class immutable", "Prevents modification", "Marks end of code", "Creates final variable"],
            correct: 1
        },
        {
            question: "Which package contains the ArrayList class?",
            options: ["java.util", "java.collections", "java.list", "java.arrays"],
            correct: 0
        },
        {
            question: "What exception is thrown when dividing by zero in Java?",
            options: ["NullPointerException", "ArithmeticException", "ZeroDivisionError", "MathException"],
            correct: 1
        },
        {
            question: "Is Java a pass-by-value or pass-by-reference language?",
            options: ["Pass-by-reference", "Pass-by-value", "Both", "Neither"],
            correct: 1
        },
        {
            question: "What is the size of int in Java?",
            options: ["2 bytes", "4 bytes", "8 bytes", "Platform dependent"],
            correct: 1
        },
        {
            question: "Which keyword is used for implementing interfaces?",
            options: ["extends", "implements", "inherits", "interfaces"],
            correct: 1
        },
        {
            question: "What is the purpose of the 'static' keyword?",
            options: ["Makes variable constant", "Belongs to class, not instance", "Prevents modification", "Makes it private"],
            correct: 1
        },
        {
            question: "Can you have multiple catch blocks for one try block?",
            options: ["No", "Yes", "Only if they handle different exceptions", "Only if generic"],
            correct: 1
        },
        {
            question: "What does super keyword do in Java?",
            options: ["Creates superclass", "Calls parent class method", "Makes class superior", "Is deprecated"],
            correct: 1
        },
        {
            question: "Which data structure is used in HashMap internally?",
            options: ["Array of LinkedLists", "Binary Tree", "Hash Table with Buckets", "Linked List"],
            correct: 2
        }
    ],
    python: [
        {
            question: "What is the correct file extension for Python?",
            options: [".python", ".py", ".p", ".pyc"],
            correct: 1
        },
        {
            question: "Which function is used to get input from user in Python?",
            options: ["input()", "get_input()", "read()", "scan()"],
            correct: 0
        },
        {
            question: "What is the output of: print(3 ** 2)?",
            options: ["9", "6", "32", "Error"],
            correct: 0
        },
        {
            question: "Which keyword is used to create a function in Python?",
            options: ["func", "function", "def", "define"],
            correct: 2
        },
        {
            question: "What is the data type of: x = [1, 2, 3]?",
            options: ["tuple", "dictionary", "list", "set"],
            correct: 2
        },
        {
            question: "How do you add an element to a list in Python?",
            options: [".push()", ".add()", ".append()", ".insert()"],
            correct: 2
        },
        {
            question: "What is the output of: len('hello')?",
            options: ["4", "5", "6", "Error"],
            correct: 1
        },
        {
            question: "Which loop is used to iterate over items in Python?",
            options: ["for...in", "foreach", "while", "do...while"],
            correct: 0
        },
        {
            question: "What is the output of: '5' + '3' in Python?",
            options: ["8", "53", "Error", "'8'"],
            correct: 1
        },
        {
            question: "How do you create a dictionary in Python?",
            options: ["dict = []", "dict = {}", "dict = ()", "dict = <>"],
            correct: 1
        },
        {
            question: "What is slicing in Python?",
            options: ["Cutting strings", "Extracting subset of sequence", "Dividing lists", "Combining strings"],
            correct: 1
        },
        {
            question: "What does range(5) produce?",
            options: ["[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4]", "[5]", "Error"],
            correct: 1
        },
        {
            question: "How do you handle exceptions in Python?",
            options: ["try...catch", "try...except", "try...handle", "try...error"],
            correct: 1
        },
        {
            question: "What is the output of: bool('False')?",
            options: ["False", "True", "0", "Error"],
            correct: 1
        },
        {
            question: "Which method removes and returns last element of list?",
            options: [".remove()", ".pop()", ".delete()", ".drop()"],
            correct: 1
        },
        {
            question: "What is the purpose of __init__ in Python classes?",
            options: ["Initializes module", "Constructor method", "Initializes file", "Starts program"],
            correct: 1
        },
        {
            question: "How do you create a class in Python?",
            options: ["class MyClass:", "class MyClass {}", "def MyClass:", "create MyClass:"],
            correct: 0
        },
        {
            question: "What is the output of: 10 % 3?",
            options: ["3", "1", "3.33", "Error"],
            correct: 1
        }
    ],
    c: [
        {
            question: "What is the entry point of a C program?",
            options: ["start()", "main()", "begin()", "init()"],
            correct: 1
        },
        {
            question: "Which header file contains printf() function?",
            options: ["#include <string.h>", "#include <stdio.h>", "#include <stdlib.h>", "#include <math.h>"],
            correct: 1
        },
        {
            question: "What is the correct way to declare a pointer?",
            options: ["int &ptr;", "int *ptr;", "int ^ptr;", "int @ptr;"],
            correct: 1
        },
        {
            question: "What is the size of int in C?",
            options: ["2 bytes", "4 bytes", "8 bytes", "Platform dependent"],
            correct: 3
        },
        {
            question: "What does sizeof() operator return?",
            options: ["Number of elements", "Memory size in bytes", "Type of data", "None of above"],
            correct: 1
        },
        {
            question: "What is static variable in C?",
            options: ["Variable that doesn't move", "Variable with fixed scope", "Persists between function calls", "Global variable"],
            correct: 2
        },
        {
            question: "What is the difference between malloc() and calloc()?",
            options: ["calloc() initializes memory to zero", "malloc() is faster", "No difference", "calloc() is deprecated"],
            correct: 0
        },
        {
            question: "How do you free memory allocated by malloc()?",
            options: ["release()", "delete()", "free()", "unalloc()"],
            correct: 2
        },
        {
            question: "What is a structure in C?",
            options: ["Control structure", "User-defined data type", "Function declaration", "Header file"],
            correct: 1
        },
        {
            question: "How do you access structure members using pointer?",
            options: ["ptr.member", "ptr->member", "ptr[member]", "ptr.->member"],
            correct: 1
        },
        {
            question: "What is the output of: printf(\"%d\", 5 / 2);?",
            options: ["2.5", "2", "Error", "2.0"],
            correct: 1
        },
        {
            question: "How do you declare an array of pointers in C?",
            options: ["int *arr[5];", "int *arr[5];", "*int arr[5];", "pointer int arr[5];"],
            correct: 0
        },
        {
            question: "What is the purpose of #define?",
            options: ["Define function", "Macro definition", "Variable declaration", "Header file"],
            correct: 1
        },
        {
            question: "What is recursion in C?",
            options: ["Function calling itself", "Loop structure", "Array operation", "Pointer dereferencing"],
            correct: 0
        },
        {
            question: "What is the FILE pointer in C?",
            options: ["Pointer to file", "Used for file I/O operations", "Type of variable", "Both A and B"],
            correct: 3
        },
        {
            question: "What does fopen() return on failure?",
            options: ["0", "NULL", "-1", "Error object"],
            correct: 1
        },
        {
            question: "What is the scope of a global variable?",
            options: ["Only in function", "Only in file", "Entire program", "Inside block"],
            correct: 2
        },
        {
            question: "What is const variable in C?",
            options: ["Variable that changes", "Constant value (read-only)", "Global variable", "Static variable"],
            correct: 1
        }
    ],
    javascript: [
        {
            question: "What is JavaScript primarily used for?",
            options: ["Server-side processing", "Client-side scripting", "Database management", "System administration"],
            correct: 1
        },
        {
            question: "How do you declare a variable in JavaScript?",
            options: ["var x = 5", "let x = 5", "const x = 5", "All of above"],
            correct: 3
        },
        {
            question: "What is the output of: console.log(typeof 'hello')?",
            options: ["string", "String", "text", "char"],
            correct: 0
        },
        {
            question: "What is the difference between == and === in JavaScript?",
            options: ["No difference", "=== is stricter (type checking)", "== is faster", "=== is deprecated"],
            correct: 1
        },
        {
            question: "What is a closure in JavaScript?",
            options: ["Closing a loop", "Function with access to parent scope", "Object method", "Class definition"],
            correct: 1
        },
        {
            question: "How do you select element by ID in JavaScript?",
            options: ["getElementById()", "selectElementById()", "getElement()", "querySelector()"],
            correct: 0
        },
        {
            question: "What is the output of: console.log(5 + '5')?",
            options: ["10", "55", "Error", "NaN"],
            correct: 1
        },
        {
            question: "What is an arrow function in JavaScript?",
            options: ["Deprecated function", "Function using => syntax", "XML syntax", "Regular function"],
            correct: 1
        },
        {
            question: "What is Promise in JavaScript?",
            options: ["A commitment", "Object for async operations", "Type of variable", "Function parameter"],
            correct: 1
        },
        {
            question: "What does .map() do in JavaScript?",
            options: ["Creates map object", "Transforms array elements", "Finds map in code", "Groups elements"],
            correct: 1
        },
        {
            question: "What is the output of: console.log(!true)?",
            options: ["true", "false", "Error", "undefined"],
            correct: 1
        },
        {
            question: "How do you add event listener in JavaScript?",
            options: ["onListener()", "addEventListener()", "attachEvent()", "bindEvent()"],
            correct: 1
        },
        {
            question: "What is async/await in JavaScript?",
            options: ["Variable keywords", "Syntax for handling promises", "Loop control", "Function types"],
            correct: 1
        },
        {
            question: "What is JSON in JavaScript?",
            options: ["Java Object Notation", "JavaScript Object Notation", "Just Object Notation", "Java Script Online"],
            correct: 1
        },
        {
            question: "What does .filter() do in JavaScript?",
            options: ["Removes elements", "Creates subset based on condition", "Sorts array", "Combines arrays"],
            correct: 1
        },
        {
            question: "What is the output of: [1, 2, 3].includes(2)?",
            options: ["1", "true", "false", "undefined"],
            correct: 1
        },
        {
            question: "What is 'this' keyword in JavaScript?",
            options: ["Current date", "Current object context", "Keyword for loops", "Variable type"],
            correct: 1
        },
        {
            question: "How do you handle errors in JavaScript?",
            options: ["try...catch", "try...except", "error...handle", "try...throw"],
            correct: 0
        }
    ]
};
