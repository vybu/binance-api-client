/**
 * Represents a single order rejection motive.
 */
export enum OrderRejectionMotive {

    NONE,
    UNKNOWN_INSTRUMENT,
    MARKET_CLOSED,
    PRICE_QTY_EXCEED_HARD_LIMITS,
    UNKNOWN_ORDER,
    DUPLICATE_ORDER,
    UNKNOWN_ACCOUNT,
    INSUFFICIENT_BALANCE,
    ACCOUNT_INACTIVE,
    ACCOUNT_CANNOT_SETTLE

}