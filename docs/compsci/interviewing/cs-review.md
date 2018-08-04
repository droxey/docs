# Interview Review

## Swift

Safe, fast, expressive replacement for Obj-C. Automatic memory management. Easier to read and maintain.

### Collection Types

`Array`: Stores collection of data of the same type.
`Set`:  Distinct values, no duplicates. Order not guaranteed. 
`Dictionary` KVC model. Order not guaranteed.

### Functions

`func` to declare.

### Let vs Var

`let` = constant. 
`var` =  variable.

## Ruby

* Root class: `Object`

* Modules serve as a mechanism for **namespaces**.  Provide mechanism for multiple inheritance via **mix-ins**. **Cannot be instantiated** like classes can.

* Method Invokation: **dot operator**, **Object#send** method, or **method(:foo).call**

* `Procs` are **anonymous methods** (or nameless functions) containing code. They can be placed inside a variable and **passed around** like any other object or scalar value. They are created by **Proc.new**, **lambda**, and **blocks** (invoked by the yield keyword).

* `self` *always* refers to the current object. Keep in mind **classes are also objects** in ruby.

  * at the *class level*, self is the **class**, `AClass`.

  - at the *instance level*, self is the **instance in context**,  aka the instance of `AClass` at memory location 0x28190.

* Explain this ruby idiom: `a ||= b`

  ```ruby
  # a = b when a == false
  # otherwise a remains unchanged
  a || a = b # (Kudos to Markus Prinz)
  ```

## CS

### 4 Tenets of OOP

- Encapsulation
- Abstraction
- Inheritance: properties of parent class passed on to child classes
- Polymorphism: ability of an object to take on multiple forms

### Method vs Constructor

`Constructor`: Used to initialize the instance of a class.  Doesn’t have a return type.
`Method`: Used to perform some function or operation. Has a return type.

###  Object

An instance of a class. An object is first declared then instantiated.

### Array vs List

`Array`: Immutable. Fixed # of elements. Must copy to add more.
`List`: Mutable. Can add more elements. Often knows the item before (tail) and the item after (head)

### Class vs Interface

- Interface: Cannot be instantiated. No constructors. Only abstract methods.  Can extend multiple interfaces.
-  Class: Implements an interface. Classes hold **data**, have **methods** that interact with that data, and are used to **instantiate objects**.

### Access Control

* * *Public*: Enforce **no access control**. Can be called in any scope.
  * *Protected:* only accessible to **other objects of the same class**.
  * *Private:* only accessible within the **context of the current object**.