# Writing Requirements: An Engineering Perspective

> The hardest single part of building a software system is deciding precisely what to build. -_Frederick Brooks_

## Well Written Requirements...

  * Represent a complete, unambiguous description of  _what_ we're creating, rather than _how_ we create it.

  * Embody an abstract, high-level implementation roadmap, facilitating a contract between developers and stakeholders.

  * Are proportionate to the size or complexity of the project and/or development team. Smaller projects contain shorter requirements, whereas larger or more difficult projects require more description.

  * Assist in the breakdown and estimation of development tasks.

  * Reveal the cost -- and requisite resources -- to complete the project.

  * Yield basic input required for the design process.

  * Omit details regarding...

     * The design, or how to accomplish the requirements.

     * Any project-related metadata such as the scheduling of individual resources or the formation of tasks.

     * Testing models which describe specific test cases that articulate the verification of fulfilled requirements.

  * Define project completion criteria.

  * Enforce the following operational paradigm: **_if it's not in the requirements, we're not doing it!_**

## A Living Document

Often described as **living documentation**, the writing and updating of requirements enable the following:

* **Shared Vision**: Different stakeholders often have opposing ideas regarding what the end product accomplishes. The act of producing requirements documents naturally generates discussion of the end product, ultimately resulting in a single source of truth to reference during the implementation phase.

* **Proactive Problem Solving**: Anticipating and identifying potential issues early ensures time, energy, and development resources are utilized wisely.

* **Define Success**: By defining the criteria used to evaluate if the implementation is complete.

## Intended Audience

Many stakeholders will consult a requirements documentation as the project's single source of truth, including:

* Product Managers
* Project Managers
* System Engineers
* System Maintainers
* QA Departments
* Customers / Clients

## Gathering Requirements

At a high level, customers and clients easily articulate their needs. However, an effective requirements gatherer further explores provided high-level details, defining the granularity necessary in order to effectively design software and de-mystify the problem set.

To gather effective requirements, one should focus on:

* Wearing many hats, effectively representing concern for multiple roles -- user, administrator, or salesperson are common examples.

* Asking lots of questions! Listening is crucial. Be ready to repeat back what you hear, and iterate until both parties agree on the description.

* Imagine how the product will be used. Doodle some pictures. Storyboard the steps of each interaction. Prototype difficult technologies.

* Model use cases.

## Functional Requirements

Excellent _functional requirements_ consider an in-depth, specific account of each interaction or function in the System.

For example:

* What inputs should the System allow?

* What outputs represent the System's response to input? To user actions? To external events?

* What additional services does the System provide?

## Non-Functional Requirements

Attributes of the System -- or the environment containing it -- are referred to as _non-functional requirements._ Failure to capture URPS details can render perfectly written and deployed software utterly useless!

**URPS** stands for...

* **Usability**: Is the software easy to learn and run? Does it require power-users, or can anyone use it? Will users require training? How much time will that take?

* **Reliability**: Does the software consistently perform the same action every time? Is it available? Does the System return accurate output? Are there bugs? How many bugs are acceptable? What types of bugs do we consider show-stoppers?

* **Performance**: Does the System complete it's work quickly and efficiently at runtime? How long does it take the System to respond to input? Does it use system resources (cpu, disk, memory, bandwidth) with care? How many users can take advantage of the System at once?

* **Supportability**: Is it easy to maintain the software? How difficult is it to implement a new feature, or fix an existing bug? Does it inform stakeholders when an error occurs? Is it written in a language or framework that many other developers utilize? What standards are enforced in the code?

## Review and Approval

Walk through each requirement with stakeholders before making it official. Team members, users, customers, and clients can help identify any remaining ambiguity or confusion.

Update the document when feedback is received, and make sure to inform interested parties!

Final approval (and any updates) should be delivered in writing and subsequently  signed off on by whichever party receives the end product.

Once the customer submits signed approval, you can rest easy knowing this document represents all truth in your project going forward.
