<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;
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
            'std_first_name' => 'required|string',
            'std_last_name' => 'required|string',
            'std_gender' => ['required','in:male, female'],
            'std_date_of_birth' => ['required', 'date'],
            'std_parents_guardian' => ['required', 'string'],
            'std_cp_number' => ['required', 'numeric'],
            'std_Email' => 'required|email|unique:students,std_Email',
            'std_Password' => ['required', 'confirmed',
            Password::min(6)
            ->letters()],
            'std_class' => ['required', 'numeric'],
            'std_photo' => ['image', 'nullable']
        ];
    }
}

