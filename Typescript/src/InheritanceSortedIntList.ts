import { IntegerList } from './IntegerList.js'
import { SortedIntList } from './hidden/SortedIntListLibrary.js'

/**
 * InheritanceSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

class InheritanceSortedIntList extends SortedIntList{
    /**
     * Constructor for InheritanceSortedIntList. Initializes the count of elements added.
     */
    _totalCount: number

    constructor() {
      super() // Calling the parent constructor
      this._totalCount = 0 // underscore prefix typically denotes a private variable
    }

    /**
     * Adds a number to the list, ensuring the list remains sorted.
     * Increases the count of total numbers added.
     *
     * @param {number} number - The number to be added.
     */
    add(number: number): boolean {
        this._totalCount++
        return super.add(number); // Calls the add method from the parent class
    }

    /**
     * Adds multiple numbers from an IntegerList to the current list, ensuring the list remains sorted.
     * Increases the count of total numbers added by the number of elements in the input list.
     *
     * @param {IntegerList} numbers - An instance of IntegerList containing numbers to be added.
     * @returns {boolean} - Returns true if at least one number was successfully added, otherwise false.
     */
    addAll(numbers: IntegerList): boolean {
        let modified: boolean = false;
        for (let i = 0; i < numbers.size(); i++) {
            modified = this.add(numbers.get(i)) || modified;
        }
        return modified;
    }

    /**
     * Retrieves the total number of elements that have been added.
     * 
     * @returns {number} - The total count of numbers added.
     */
    getTotalAdded(): number {
        return this._totalCount;
    }

}

export { InheritanceSortedIntList }
