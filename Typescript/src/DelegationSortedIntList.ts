import { IntegerList } from './IntegerList.js'
import { SortedIntList } from './hidden/SortedIntListLibrary.js'
/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */

class DelegationSortedIntList implements IntegerList {
  // Write your implementation below with API documentatioin
  private sortedList: SortedIntList
  private totalCount: number

  constructor() {
    this.sortedList = new SortedIntList()
    this.totalCount = 0
  }

  /**
   * Adds a number to the list, ensuring the list remains sorted.
   * Increases the count of total numbers added.
   *
   * @param {number} number - The number to be added.
   */
  add(number: number): boolean {
    this.totalCount++
    return this.sortedList.add(number); // Calls the add method from the parent class
  }

  /**
   * Adds multiple numbers from an IntegerList to the current list, ensuring the list remains sorted.
   * Increases the count of total numbers added by the number of elements in the input list.
   *
   * @param {IntegerList} numbers - An instance of IntegerList containing numbers to be added.
   * @returns {boolean} - Returns true if at least one number was successfully added, otherwise false.
   */
  addAll(values: IntegerList): boolean {
    this.totalCount += values.size();
    return this.sortedList.addAll(values);
  }

  /**
   * Returns the total number of elements attempted to be added to the list.
   *
   * @returns {number} - Total number of attempted additions.
   */
  getTotalAdded(): number {
    return this.totalCount;
  }

  /**
   * Retrieves the element at the specified position in the list.
   * 
   * @param index Position of the element.
   * @return Element at the specified position.
   */
  get(index: number): number {
    return this.sortedList.get(index);
  }

  /**
   * Returns the number of elements in the list.
   * 
   * @return Size of the list.
   */
  size(): number {
    return this.sortedList.size();
  }

  /**
   * Removes the first occurrence of the specified element from the list.
   * 
   * @param value Element to be removed.
   * @return {@code true} if the element was removed, otherwise {@code false}.
   */
  remove(value: number): boolean {
    return this.sortedList.remove(value);
  }

  /**
   * Removes all occurrences of the elements from this list.
   * 
   * @param values Elements to be removed.
   * @return {@code true} if the list was modified, otherwise {@code false}.
   */
  removeAll(values: IntegerList): boolean {
    return this.sortedList.removeAll(values);
  }
}

export { DelegationSortedIntList }
