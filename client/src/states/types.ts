export interface ExpenseByCategory {
    salaries:number;
    supplies:number;
    services: number;
}


export interface Month {
    id: string;
    month: string;
    revenue: number;
    expenses: number;
    nonOperationalExpense:number;
    operationalExpense:number;
}

export interface Day {
    id: string;
    day: string;
    revenue: number;
    expenses: number;
  
}

export interface  GetkpisResponse {
    id:string;
    _id: string;
    __v:number;
    totalProfit: number;
    totalRevenue:number;
    totalExpenses:number;
    expensesByCategory: ExpenseByCategory;
    monthlyData : Array<Month>;
    dailyData:Array<Day>;
    createdAt: string;
    updatedAt:string;
}

export interface  GetProductResponse {
    id:string;
    _id: string;
    __v:number;
    price: number;
    expense:number;
    transaction: Array<string>;
    createdAt: string;
    updatedAt:string;
  
}
export interface  GetTransactionResponse {
    id:string;
    _id: string;
    __v:number;
    buyer: string;
    amount:number;
    productIds: Array<string>;
    createdAt: string;
    updatedAt:string;
  
}