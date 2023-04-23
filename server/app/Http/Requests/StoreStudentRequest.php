<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    //failure point
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'std_Name' => 'required|string',
            // 'std_Email' => ['required', 'email', 'unique:users,email'],
            // 'std_Password' => ['required', 
            // Password::min(6)],
            // 'std_Date-of-Birth' => ['required'],
            // 'std_cp_number' => ['required'],
            // 'std_parents_Guardian' => ['required']
        ];
    }
}

